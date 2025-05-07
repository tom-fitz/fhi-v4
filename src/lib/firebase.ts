import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as dbRef, set, push } from 'firebase/database';

// Use the client check to ensure safe access to the environment variables
const isClient = typeof window !== 'undefined';

// Add console log for debugging
if (isClient) {
  console.log("Firebase storage bucket:", process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET);
}

// Hardcode fallback values if environment variables aren't available (for GitHub Pages static build)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "fhi-v4.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "https://fhi-v4-default-rtdb.firebaseio.com/",
};

console.log("firebaseConfig", firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);

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

// Helper function to save contact form data
export const saveContactFormData = async (formData: {
  name: string;
  email: string;
  message: string;
  phone?: string;
}) => {
  try {
    const contactsRef = dbRef(database, 'contacts');
    const newContactRef = push(contactsRef);
    await set(newContactRef, {
      ...formData,
      timestamp: new Date().toISOString()
    });
    return { success: true };
  } catch (error) {
    console.error('Error saving contact form data:', error);
    return { success: false, error };
  }
};

export { storage, database }; 