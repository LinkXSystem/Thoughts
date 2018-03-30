FROM mongo:latest

LABEL author="linkasde_system@163.com"
LABEL version="1.0.0"
LABEL desecribe="mongodb's dockerfile"

COPY init.js build.sh /

RUN chmod +x build.sh

ENTRYPOINT [ "./build.sh" ]