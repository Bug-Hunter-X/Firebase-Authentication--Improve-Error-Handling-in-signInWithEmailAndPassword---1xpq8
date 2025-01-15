import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Signed in as:", user);
  } catch (error) {
    console.error("Sign-in error:", error);
    // Handle errors appropriately
    // For example, check for 'auth/user-not-found' or 'auth/wrong-password'
    if (error.code === 'auth/user-not-found') {
      console.error('User not found');
    } else if (error.code === 'auth/wrong-password') {
      console.error('Wrong password');
    } else {
      console.error('An unexpected error occurred');
    }
  }
}

signIn("user@example.com", "password123");