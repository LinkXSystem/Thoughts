> store's folder
```
mkdir {data|config}
```

> redis

```
docker run -d --restart=always -p 6379:6379 -v /data/redis:/data --name redis redis:latest
```

> mongo

```
docker run -d --restart=always -p 27017:27017 -v /data/mongo:/data/db --name mongo mongo:latest
```