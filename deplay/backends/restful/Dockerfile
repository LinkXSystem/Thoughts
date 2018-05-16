FROM node:latest

LABEL author="linkasde_system@163.com"
LABEL version="1.0.0"
LABEL desecribe="restful sever's dockerfile"

RUN npm config set registry https://registry.npm.taobao.org

RUN npm install pm2 -g

RUN git clone https://github.com/LinkXSystem/Thoughts.git

WORKDIR /Thoughts/backends/restful

RUN npm install

EXPOSE 2018

ENTRYPOINT [ "pm2", "start", "deploy.json", "--no-daemon" ]