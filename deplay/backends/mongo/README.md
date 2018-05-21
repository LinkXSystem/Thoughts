> 文件说明

* build.sh 是 mongodb 数据库的启动脚本
* init.js 是 mongodb 数据库的管理初始化脚本
* user.js 是 mongodb 数据库的用户初始化脚本

> init.js 的样例代码说明

```
# 添加认证
var url = 'mongodb://localhost:27017/admin';

var admin = connect(url);

admin.createUser({
  user: 'root',
  pwd: 'thoughts',
  roles: [
    {
      # role 是用户角色
      role: 'readWriteAnyDatabase',
      db: 'admin',
    },
  ],
});
```

> mongodb 角色说明

* 数据库用户角色（Database User Roles）：
  read：授予 User 只读数据的权限
  readWrite：授予 User 读写数据的权限数据库管理角色（Database Administration Roles）：
  dbAdmin：在当前 dB 中执行管理操作
  dbOwner：在当前 DB 中执行任意操作
  userAdmin：在当前 DB 中管理 User

* 备份和还原角色（Backup and Restoration Roles）：
  backup
  restore

* 跨库角色（All-Database Roles）：

  readAnyDatabase：授予在所有数据库上读取数据的权限
  readWriteAnyDatabase：授予在所有数据库上读写数据的权限
  userAdminAnyDatabase：授予在所有数据库上管理 User 的权限
  dbAdminAnyDatabase：授予管理所有数据库的权限

* 集群管理角色（Cluster Administration Roles）：

  clusterAdmin：授予管理集群的最高权限
  clusterManager：授予管理和监控集群的权限
  clusterMonitor：授予监控集群的权限，对监控工具具有 readonly 的权限
  hostManager：管理 Server
