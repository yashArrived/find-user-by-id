# find-user-by-id

A simple utility function to find a user by their ID from a MongoDB database using Mongoose. This package is lightweight, easy to use, and provides basic error handling.

---

## Installation

Install the package using npm:

```bash
npm install find-user-by-id


## Usage
 - Import the Function
const { findUserById } = require('find-user-by-id');

## Function Signature
findUserById(UserModel, id);


### Parameters:
 - UserModel (Object): A Mongoose model representing the database schema (e.g., User).
 - id (String): The ID of the user to search for.
### Returns:
- Resolves to the user object if found.
- Resolves to null if no user is found.
- Throws an error if invalid inputs are provided or if an error occurs during execution.

## Example Usage : 

const { findUserById } = require('find-user-by-id');

(async () => {
  try {
    const userId = '1234567890abcdef';
    const user = await findUserById(User, userId);

    if (user) {
      console.log('User found:', user);
    } else {
      console.log('No user exists with ID:', userId);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
