'use client'

import { useState } from 'react'
import Image from 'next/image'

const photos = [
  '/assets/images/gallery1.jpeg',
  '/assets/images/gallery2.jpeg',
  '/assets/images/gallery2.jpeg',
  '/assets/images/gallery3.jpg',
  '/assets/images/gallery1.jpeg',
  '/assets/images/gallery2.jpeg',
  '/assets/images/gallery2.jpeg',
  '/assets/images/gallery3.jpg',
  '/assets/images/gallery3.jpg',
  '/assets/images/gallery3.jpg',
  // Add more photos as needed
]

const GalleryComponent = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageError, setImageError] = useState<boolean>(false)

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-3xl font-light text-center mb-12">Our Work</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((src, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white"
              onClick={() => setSelectedImage(src)}
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={() => setImageError(true)}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {imageError && (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-100">
                    Image not found
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-5xl mx-4">
              <Image
                src={selectedImage}
                alt="Selected gallery image"
                width={1600}
                height={1067}
                className="w-full h-auto rounded-lg shadow-2xl"
                priority
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default GalleryComponent 