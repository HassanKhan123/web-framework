import { User } from './models/User';

const user = new User({});
user.set({ name: 'Hassan', age: 21 });
user.on('change', () => {
  console.log('change1');
});
user.on('change', () => {
  console.log('change2');
});
user.on('change1', () => {
  console.log('change3');
});

user.trigger('change');

console.log(user);
