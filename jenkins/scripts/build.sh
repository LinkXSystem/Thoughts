#!/usr/bin/env sh

echo '========================================================'
echo 'thoughts & jenkins'
echo '========================================================'


cd deplay/frontend

docker images

docker build -t thoughts-frontend-v2:latest .

echo '========================================================'
echo 'thoughts & jenkins'
echo '========================================================'