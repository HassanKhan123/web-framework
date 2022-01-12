import { User } from './models/User';

const user = new User({ id: 1, name: 'Afridi', age: 32 });

user.on('save', () => {
  console.log(user);
});

user.save();
