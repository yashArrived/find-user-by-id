const findUserById = async (UserModel, id) => {
  try {
    // Validate input
    if (!UserModel || typeof UserModel.findById !== 'function') {
      throw new Error('Invalid UserModel provided.');
    }
    if (!id) {
      throw new Error('No ID provided.');
    }

    // Find the user
    const user = await UserModel.findById(id);
    if (!user) {
      console.log('No user exists with id:', id);
      return null; // Explicitly return null if the user is not found
    }

    return user;
  } catch (error) {
    // Log and rethrow the error
    console.error('Error in findUserById:', error.message);
    throw error;
  }
};

module.exports = {
  findUserById,
};
