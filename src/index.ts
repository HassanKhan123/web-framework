import { User } from './models/User';
import { Collection } from './models/Collection';

const baseURL = 'http://localhost:3000/users';

const collection = new Collection(baseURL);
collection.on('change', () => {
  console.log(collection);
});
collection.fetch();
