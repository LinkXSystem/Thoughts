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

url = 'mongodb://localhost:27017/inspiration';

var inspiration = connect(url);

var client = [
  {
    access: 'linksystem-inspiration',
    secret: '2018-linksystem'
  }
];

inspiration.auths.insert(client);
