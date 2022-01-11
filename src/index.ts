import { User } from './models/User';

const user = new User({ name: 'new', age: 12 });

user.save();
