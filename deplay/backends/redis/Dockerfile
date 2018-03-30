FROM redis:latest

LABEL author="linkasde_system@163.com"
LABEL version="1.0.0"
LABEL desecribe="redis's dockerfile"

COPY redis.conf /

WORKDIR /

ENTRYPOINT [ "/usr/local/bin/redis-server", "redis.conf" ]