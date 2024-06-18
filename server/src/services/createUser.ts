import User from '../models/user';
import checkExistingUser from './checkUser';

const createUser = async ({ email, name, rooms }, handleError: (err) => void) => {

  const userExists = await checkExistingUser(email);
  if (userExists) console.log ('User with this email already exists.');
  
  const newUser = new User({
    email,
    name,
    rooms,
  });

  newUser.save(handleError);
};

export default createUser;