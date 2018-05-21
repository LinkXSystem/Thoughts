var url = 'mongodb://localhost:27017/thoughts';

var thoughts = connect(url);

thoughts.users.insert({
  email: 'thoughts@linksystem.com',
  username: 'thoughts',
  // 密码是 thoughts
  password: 'eea6456dc0deb8800482fb0fd73fda99',
  identify: '',
  portrait: '',
  fingerprint: '',
  position: '',
  description: '',
  register: new Date(),
});
