import { User } from './models/User';

const user = new User({});
user.set({ name: 'Hassan', age: 21 });
user.on('change', () => {});
user.on('change', () => {});
user.on('change1', () => {});

console.log(user);
