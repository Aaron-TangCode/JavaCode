#!/bin/bash

# 设置默认的密钥文件路径
KEY_PATH="$HOME/.ssh/id_rsa"

# 检查是否已经存在密钥文件
if [ -f "$KEY_PATH" ]; then
    echo "SSH 密钥文件 $KEY_PATH 已经存在。"
    read -p "是否覆盖现有密钥？(y/n): " choice
    if [ "$choice" != "y" ]; then
        echo "操作已取消。"
        exit 1
    fi
fi

# 生成新的 SSH 密钥对
ssh-keygen -t rsa -b 4096 -f "$KEY_PATH" -N ""

# 确保 .ssh 目录和 authorized_keys 文件存在
mkdir -p "$HOME/.ssh"
touch "$HOME/.ssh/authorized_keys"

# 将公钥添加到 authorized_keys 文件中
cat "${KEY_PATH}.pub" >> "$HOME/.ssh/authorized_keys"

# 设置正确的权限
chmod 700 "$HOME/.ssh"
chmod 600 "$HOME/.ssh/authorized_keys"

echo "新的 SSH 密钥对已生成，并添加到 authorized_keys 文件中。"
