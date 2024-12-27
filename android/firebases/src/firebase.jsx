import firebase from '@react-native-firebase/app';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGQh6Q9QFMUh-pb-tTTbvLrUL3zUhwRGU",
  authDomain: "auth-9f735.firebaseapp.com", // Use project_id from google-services.json
  projectId: "auth-9f735",
  storageBucket: "auth-9f735.appspot.com", // Corrected based on google-services.json
  messagingSenderId: "235106664310",
  appId: "1:235106664310:android:aae551689c262bf0d24457",
};

// Initialize Firebase if it hasn't been initialized already
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized
}

export { firebase };
