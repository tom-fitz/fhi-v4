import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

export const getImageUrl = async (imageName: string, isGalleryImage: boolean = false): Promise<string> => {
  const imagePath = isGalleryImage ? `images/gallery/${imageName}` : `images/${imageName}`;
  
  try {
    const imageRef = ref(storage, imagePath);
    return await getDownloadURL(imageRef);
  } catch (error: any) {
    const bucketName = "fhi-v4.firebasestorage.app";
    const encodedPath = encodeURIComponent(imagePath);
    const directUrl = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodedPath}?alt=media`;
    return directUrl;
  }
};

// Gallery images are in the gallery subdirectory
export const galleryImages = [
  'gallery1.jpeg',
  'gallery3.jpg'
];

// Other images are in the root images directory
export const logoImage = 'logo_white.png';