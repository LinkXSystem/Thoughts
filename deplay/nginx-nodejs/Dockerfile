FROM nginx:latest

LABEL author="linksystem"
LABEL version="0.1.0"
LABEL desecribe="作用是映射服务"

RUN apt-get update

RUN apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

RUN apt-get install -y nodejs

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;"]