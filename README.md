### Thoughts

> 简介

这个项目是我的毕业设计项目，而该项目是关于博客系统的微服务化设计的实践，主要使用的技术有 nodejs 和 angular。

> 默认

```
{
  username: 'LinkSystem',
  position: 'Thoughts博客开发者',
  description: 'Thoughts博客系统，使用nodejs、angular为核心'
}
```

> Github API 记录

* 获取指定用户项目： https://api.github.com/users/:username/repos
* 基于 fork 字段获取自己的项目

> Jenkins 部署

```
docker run \
  --rm \
  -d \
  -u root \
  -p 8080:8080 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$HOME":/home \
  jenkinsci/blueocean
```
