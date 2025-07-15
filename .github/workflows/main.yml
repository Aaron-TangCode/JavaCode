name: Deploy Blog Pages

on:
  push:
    branches: [ "master" ]
  pull_request:
    branches: [ "master" ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18.16.0'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run docs:build

      - name: Deploy to Nginx Server
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          SSH_HOST: ${{ secrets.SSH_HOST }}
          SSH_USERNAME: ${{ secrets.SSH_USERNAME }}
          SSH_PASSWORD: ${{ secrets.SSH_PASSWORD }}
          REMOTE_PATH: ${{ secrets.REMOTE_PATH }}
        run: |
          mkdir -p ~/.ssh
          echo "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan $SSH_HOST >> ~/.ssh/known_hosts
          #scp -r ./docs/.vuepress/dist/* $SSH_USERNAME@$SSH_HOST:$REMOTE_PATH
          sshpass -p $SSH_PASSWORD scp -r ./dev-ops/nginx/html/* root@$SSH_HOST:$REMOTE_PATH
