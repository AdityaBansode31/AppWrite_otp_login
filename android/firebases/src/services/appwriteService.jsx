// import { Client, Account } from 'appwrite';

// const client = new Client();
// const account = new Account(client);

// client.setEndpoint('https://cloud.appwrite.io/v1')  // Cloud Appwrite endpoint (replace with your own server URL if self-hosted)
//       .setProject('676a82850006a0e84f7b'); // Replace with your project ID

// export const sendOTP = async (phoneNumber) => {
//   try {
//     await account.createPhoneSession(phoneNumber);
//     return true;
//   } catch (error) {
//     console.error('Error sending OTP:', error);
//     return false;
//   }
// };

// export const verifyOTP = async (userId, otp) => {
//   try {
//     const session = await account.updatePhoneSession(userId, otp);
//     return session;
//   } catch (error) {
//     console.error('Error verifying OTP:', error);
//     return null;
//   }
// };

import { Client, Account, ID } from 'appwrite';

const client = new Client();
const account = new Account(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
  .setProject('676a82850006a0e84f7b'); // Replace with your Appwrite project ID

export const sendOTP = async (phoneNumber) => {
  try {
    const formattedPhoneNumber = `+91${phoneNumber}`; // Automatically prepend +91
    const token = await account.createPhoneToken(ID.unique(), formattedPhoneNumber);
    return { userId: token.userId, success: true };
  } catch (error) {
    console.error('Error sending OTP:', error);
    return { success: false, error };
  }
};

export const verifyOTP = async (userId, otp) => {
    try {
        const session = await account.createSession(userId, otp);
        console.log('Session created successfully:', session);
        return { session, success: true };
      } catch (error) {
        console.error('Error during session creation:', error);
        return { success: false, error };
      }
};

export const checkSession = async () => {
  try {
    const current = await account.get();
    return { user: current, success: true };
  } catch (error) {
    return { success: false, error };
  }
};