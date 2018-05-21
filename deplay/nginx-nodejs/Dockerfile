FROM nginx:latest

LABEL author="linksystem"
LABEL version="0.1.0"
LABEL desecribe="作用是映射服务"

RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

RUN sudo apt-get install -y nodejs

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;"]