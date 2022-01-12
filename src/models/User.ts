import { Model } from './Model';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const baseURL = 'http://localhost:3000/users';
export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps) {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(baseURL)
    );
  }
}
