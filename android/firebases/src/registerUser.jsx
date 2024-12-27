// // src/registerUser.js
// import { account } from './appwrite';

// const registerUser = async (email, password) => {
//   try {
//     const response = await account.create('unique()', email, password);  // Create a new user account
//     console.log('User registered successfully:', response);
//     return response;
//   } catch (error) {
//     console.error('Registration error:', error);
//     throw new Error('Registration failed: ' + error.message);
//   }
// };

// export default registerUser;

// src/registerUser.js
import { account } from './appwrite';

const registerWithPhone = async (phone) => {
  try {
    const response = await account.createPhoneSession(phone);
    console.log('Phone registration successful:', response);
    return response;
  } catch (error) {
    console.error('Registration error:', error);
    throw new Error('Phone registration failed: ' + error.message);
  }
};

export { registerWithPhone };
