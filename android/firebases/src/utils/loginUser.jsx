import { Account } from 'appwrite';
import client from '../appwrite';

const account = new Account(client);

const loginUser = async (email, password) => {
  try {
    const session = await account.createEmailSession(email, password);
    console.log('Login successful:', session);
    alert('Login successful');
  } catch (error) {
    console.error('Login error:', error);
    alert('Login failed: ' + error.message);
  }
};

export default loginUser;
