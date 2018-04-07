FROM node:8.9.4-alpine

LABEL author="linkasde_system@163.com"
LABEL version="1.0.0"
LABEL desecribe="前端容器部署文件"

WORKDIR /root/frontend/

COPY frontend .
# 如果不配置淘宝源，可能会造成长时间等待
RUN npm config set registry https://registry.npm.taobao.org

RUN npm install

EXPOSE 3000
 
ENTRYPOINT npm start
