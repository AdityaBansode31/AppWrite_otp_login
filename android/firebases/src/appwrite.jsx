// src/appwrite.js
import { Client, Account } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1')  // Cloud Appwrite endpoint (replace with your own server URL if self-hosted)
      .setProject('676a82850006a0e84f7b');  // Replace with your Appwrite project ID

// Initialize the Account service
const account = new Account(client);

export { account };
