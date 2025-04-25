import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

export const getImageUrl = async (imageName: string, isGalleryImage: boolean = false): Promise<string> => {
  try {
    const imagePath = isGalleryImage ? `images/gallery/${imageName}` : `images/${imageName}`;
    const imageRef = ref(storage, imagePath);
    return await getDownloadURL(imageRef);
  } catch (error: any) {
    console.error(`Error getting URL for ${imageName}:`, error.message);
    throw error;
  }
};

// Gallery images are in the gallery subdirectory
export const galleryImages = [
  'gallery1.jpeg',
  'gallery3.jpg'
];

// Other images are in the root images directory
export const logoImage = 'logo_white.png'; 