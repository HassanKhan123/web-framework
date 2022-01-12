import { User } from './models/User';

const user = User.buildUser({ id: 1, name: 'Hassan', age: 32 });

user.on('save', () => {
  console.log(user);
});

user.save();
