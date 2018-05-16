FROM node:latest

LABEL author="linkasde_system@163.com"
LABEL version="1.0.0"
LABEL desecribe="cloud storage's dockerfile"

RUN npm config set registry https://registry.npm.taobao.org

RUN npm install -g @angular/cli

RUN git clone https://github.com/LinkXSystem/Thoughts.git

WORKDIR /Thoughts/frontend

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "start"]

