import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

// Use the client check to ensure safe access to the environment variables
const isClient = typeof window !== 'undefined';

// Add console log for debugging
if (isClient) {
  console.log("Firebase storage bucket:", process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET);
}

// Hardcode fallback values if environment variables aren't available (for GitHub Pages static build)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyB3BliB2CeFAMQrlyy_xWZ0FPmlR-RJGOs",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "fhi-v4.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "fhi-v4",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "fhi-v4.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "202417067705",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:202417067705:web:2bef19f730511389202d68"
};

console.log("firebaseConfig", firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Helper function to get download URLs
export const getStorageFileURL = async (path: string) => {
  try {
    const fileRef = ref(storage, path);
    const url = await getDownloadURL(fileRef);
    return url;
  } catch (error) {
    console.error('Error getting download URL:', error);
    throw error;
  }
};

export { storage }; 