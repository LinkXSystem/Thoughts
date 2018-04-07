const mongo = require('../../modules/mongo');
const uuid = require('uuid/v4');

const test = async () => {
  try {
    const { User } = mongo.entity;
    // const data = await User.create({
    //   identify: uuid(),
    //   username: 'linksystem',
    //   email: 'linksystem@163.com',
    //   password: '2018',
    // });

    const data = await User.findOne({}, { _id: false, __v: false })

    console.log(data);
  } catch (e) {
    console.log('====================================');
    console.log(e);
    console.log('====================================');
  } finally {
    const { control } = mongo;
    control.disconnect();
  }
};

test();
