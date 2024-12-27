// // src/loginUser.js
// import { account } from './appwrite';

// const loginUser = async (email, password) => {
//   try {
//     const session = await account.createEmailSession(email, password);  // Login user with email and password
//     console.log('Login successful:', session);
//     return session;
//   } catch (error) {
//     console.error('Login error:', error);
//     throw new Error('Login failed: ' + error.message);
//   }
// };

// export default loginUser;


// src/loginUser.js
import { account } from './appwrite';

const loginWithPhoneNumber = async (phone) => {
  try {
    const response = await account.createPhoneSession(phone);
    console.log('OTP sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Login error:', error);
    throw new Error('OTP login failed: ' + error.message);
  }
};

const verifyOTP = async (userId, otp) => {
  try {
    const response = await account.updatePhoneSession(userId, otp);
    console.log('OTP verified successfully:', response);
    return response;
  } catch (error) {
    console.error('OTP verification error:', error);
    throw new Error('OTP verification failed: ' + error.message);
  }
};

export { loginWithPhoneNumber, verifyOTP };
