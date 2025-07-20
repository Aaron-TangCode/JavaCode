---
title: 哎哟！这个Bug，有点东西
index: false
category:
  - 生产事故
---



# 哎哟！这个Bug，有点东西



有一个朋友和我聊天时，我们聊起了最近线上出现的Bug。他的分享中，比较经典的Bug是这样子的：



朋友突然收到业务的反馈，在创建账户时，显示如下异常：

[//]: # (![JSON问题-截图2]&#40;/Users/yebing/Downloads/JSON问题-截图2.jpg&#41;)

朋友说看到这个截图的第一反应就是这个Bug肯定和序列化有关系。



异常中提到了特定的信息：

method: getManagerIdCard



也就是这个 getManagerIdCard方法序列化时出现了异常。我直接定位到商家实体类Merchant的getManagerIdCard方法。



```java
public String getManagerIdCard() {
        return getExtInfo(ID_CARD, String.class);
    }
// propertyMap里面存着,key:managerCardId value:123456789999999999X
private <T> T getExtInfo(String propertyName, Class<T> clazz) {
        if (propertyMap == null) {
            propertyMap = (Map<String, Object>) JSONObject.parseObject(extInfo, Map.class);
            if (propertyMap == null) {
                return null;
            }
        }
        Object propertyJson = propertyMap.get(propertyName);
        if (Objects.isNull(propertyJson)) {
            return null;
        }
        return JSON.parseObject(propertyJson.toString(), clazz);
    }
```



朋友和测试同学沟通后发现，这个功能当时已经测试过的，但当时测试用例是这样子的：

managerIdCard:012345678912345678



但目前抛异常的入参显示的managerIdCard为：01234567891234567**X**



看到这里，导致Bug的原因已经很明显了。



就是最后一句代码的问题

```java
JSON.parseObject(propertyJson.toString(), clazz);
```

代入参数值后：

```java
JSON.parseObject("01234567891234567X", String.class);
```

看到这里我当时表示非常疑惑，朋友也表示当时的他也很疑惑



但这代码放在Idea上跑，你就会发现，会报错

```java
Exception in thread "main" com.alibaba.fastjson.JSONException: not close json text, token : error
	at com.alibaba.fastjson.parser.DefaultJSONParser.close(DefaultJSONParser.java:1527)
	at com.alibaba.fastjson.JSON.parseObject(JSON.java:400)
	at com.alibaba.fastjson.JSON.parseObject(JSON.java:300)
	at com.alibaba.fastjson.JSON.parseObject(JSON.java:573)
```

但如果把参数值替换为：

```java
JSON.parseObject("012345678912345678", String.class);
```

这代码跑起来是正常的。



经过一番折腾后，才发现在 fastjson 中，`JSON.parseObject` 方法用于将 JSON 字符串解析成 Java 对象。当你传递一个 JSON 字符串时，它应该是一个合法的 JSON 格式。对于字符串，这意味着它应该被双引号包围。例如：

```java
String jsonString = "\"111111X\"";
String parsedString = JSON.parseObject(jsonString, String.class);
```

这段代码会正常运行，因为 `"\"111111X\""` 是一个合法的 JSON 字符串。



我看到这里，又有问题了，那为啥JSON.parseObject("012345678912345678", String.class)就不报错呀



其实是这样子的。fastjson 在某些版本中对于解析纯数字字符串时可能会较为宽松，允许没有双引号包围的数字字符串，因此 `"111111"` 可能意外地通过了解析（这并不符合标准的 JSON 规范，但是 fastjson 可能在这方面有自己的实现逻辑）。而 `"111111X"` 由于包含非数字字符，无法被解释为一个数字，因此会触发解析错误。



问题复盘完了，那接下来应该如何修复？关于这个问题，你可以思考一下，把想法写在留言区，下期文章分享修复方案



源代码：

```java
public String getManagerIdCard() {
        return getExtInfo(ID_CARD, String.class);
    }
// propertyMap里面存着,key:managerCardId value:123456789999999999X
private <T> T getExtInfo(String propertyName, Class<T> clazz) {
        if (propertyMap == null) {
            propertyMap = (Map<String, Object>) JSONObject.parseObject(extInfo, Map.class);
            if (propertyMap == null) {
                return null;
            }
        }
        Object propertyJson = propertyMap.get(propertyName);
        if (Objects.isNull(propertyJson)) {
            return null;
        }
        return JSON.parseObject(propertyJson.toString(), clazz);
    }
```



