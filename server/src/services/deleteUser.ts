import User from '../models/user';

const deleteUser = (id, handleError) => {
  User.findByIdAndDelete(id, (err, user) => {
    handleError(err, user);
  });
};

export default deleteUser;