#!/usr/bin/env sh

echo '========================================================'
echo 'thoughts & jenkins'
echo '========================================================'

npm config set registry https://registry.npm.taobao.org

cd frontend

npm install -g @angular/cli

npm install

npm start

echo '========================================================'
echo 'thoughts & jenkins'
echo '========================================================'