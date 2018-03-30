FROM node:8.9.4-alpine

LABEL author="linkasde_system@163.com"
LABEL version="1.0.0"
LABEL desecribe="this is dockerfile of inspection's project for frontend part"

WORKDIR /root/frontend/

COPY frontend .

RUN npm config set registry https://registry.npm.taobao.org

RUN npm install

EXPOSE 3000
 
ENTRYPOINT npm start
