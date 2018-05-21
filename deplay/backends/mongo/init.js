var url = 'mongodb://localhost:27017/admin';

var admin = connect(url);

admin.createUser({
  user: 'root',
  pwd: 'thoughts',
  roles: [
    {
      role: 'readWriteAnyDatabase',
      db: 'admin',
    },
  ],
});
