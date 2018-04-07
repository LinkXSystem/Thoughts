> 文件说明

* build.sh 是 mongodb 数据库的启动脚本
* init.js 是 mongodb 数据库的初始化脚本

> init.js 的样例代码说明

```
# 添加认证
var url = 'mongodb://localhost:27017/admin';

var admin = connect(url);

admin.createUser({
  user: 'root',
  pwd: 'inspiration',
  roles: [
    {
      role: 'userAdminAnyDatabase',
      db: 'admin'
    }
  ]
});

# 插入数据
url = 'mongodb://localhost:27017/inspiration';

var inspiration = connect(url);

var client = [
  {
    access: 'linksystem-inspiration',
    secret: '2018-linksystem'
  }
];

inspiration.auths.insert(client);
```
