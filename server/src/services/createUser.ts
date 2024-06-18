import User from '../models/user';
import checkExistingUser from './checkUser';

const createUser = async ({ email, name, rooms }, handleError: (err) => void) => {

  try {
    const userExists = await checkExistingUser(email);
    if (userExists) {
      throw new Error('User with this email already exists.');
    }
    // Здесь можно продолжить выполнение программы
  } catch (error) {return}

  const newUser = new User({
    email,
    name,
    rooms,
  });

  newUser.save(handleError);
};

export default createUser;