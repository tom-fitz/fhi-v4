'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { logoImage, heroVideoMp4, heroVideoM4a, getImageUrl, getVideoUrl } from '@/lib/images'

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showLogo, setShowLogo] = useState(false)
  const [logoUrl, setLogoUrl] = useState<string>('')
  const [videoMp4Url, setVideoMp4Url] = useState<string>('')
  const [videoM4aUrl, setVideoM4aUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load media assets
    const loadAssets = async () => {
      setIsLoading(true);
      try {
        const [logoUrlResult, videoMp4UrlResult, videoM4aUrlResult] = await Promise.all([
          getImageUrl(logoImage),
          getVideoUrl(heroVideoMp4),
          getVideoUrl(heroVideoM4a)
        ]);
        
        setLogoUrl(logoUrlResult);
        setVideoMp4Url(videoMp4UrlResult);
        setVideoM4aUrl(videoM4aUrlResult);
      } catch (error) {
        console.error('Error loading media assets:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadAssets();

    // Set timeout for logo fade-in
    const timer = setTimeout(() => {
      setShowLogo(true)
    }, 12000)
    
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (videoRef.current && videoMp4Url) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.error('Error playing video:', error)
      })
    }
  }, [videoMp4Url]);

  if (isLoading) {
    return (
      <div className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          {videoMp4Url && <source src={videoMp4Url} type="video/mp4" />}
          {videoM4aUrl && <source src={videoM4aUrl} type="audio/mp4" />}
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20">
        <div className={`text-center transition-opacity duration-1000 ${showLogo ? 'opacity-100' : 'opacity-0'}`}>
          {logoUrl && (
            <Image
              src={logoUrl}
              alt="Fitzgerald Home Interiors Logo"
              width={500}
              height={250}
              className="object-contain mb-8"
              priority
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroVideo 