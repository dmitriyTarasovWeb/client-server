import User from '../models/user';

const getUser = (id, handleError) => {
  User.findById(id, (err, user) => {
    handleError(err, user);
  }).populate('rooms');
};

export default getUser;