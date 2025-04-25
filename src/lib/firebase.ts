import { initializeApp } from 'firebase/app';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Set CORS headers in the metadata when getting download URLs
export const getStorageDownloadURL = async (ref: any) => {
  const metadata = {
    customMetadata: {
      'Access-Control-Allow-Origin': 'https://tom-fitz.github.io, https://tom-fitz.github.io/fhi-v4, http://localhost:3000',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Max-Age': '3600'
    }
  };
  await ref.updateMetadata(metadata);
  return ref.getDownloadURL();
};

export { storage }; 