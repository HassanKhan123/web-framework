import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const baseURL = 'http://localhost:3000/users';
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync(baseURL);
  public attributes: Attributes<UserProps> = new Attributes({});
}
