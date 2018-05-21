var url = [
  'mongodb://localhost:27017/admin',
  'mongodb://localhost:27017/thoughts',
];

var admin = connect(url[0]);

admin.createUser({
  user: 'root',
  pwd: 'thoughts',
  roles: [
    {
      role: 'userAdminAnyDatabase',
      db: 'admin',
    },
  ],
});

// var thoughts = connect(url[1]);

// thoughts.users.insert({
//   email: 'thoughts@linksystem.com',
//   username: 'thoughts',
//   // 密码是 thoughts
//   password: 'eea6456dc0deb8800482fb0fd73fda99',
//   identify: '',
//   portrait: '',
//   fingerprint: '',
//   position: '',
//   description: '',
//   register: new Date(),
// });
