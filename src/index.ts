import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'Lalalal', age: 43 });

const userForm = new UserForm(document.getElementById('root'), user);
userForm.render();
