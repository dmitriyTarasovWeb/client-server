import User from '../models/user';

const checkExistingUser = async (email) => {
  const existingUser = await User.findOne({ email });
  return existingUser ? true : false;
};

export default checkExistingUser;