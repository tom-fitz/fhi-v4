'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Error playing video:', error)
      })
    }
    // Set timeout for logo fade-in
    const timer = setTimeout(() => {
      setShowLogo(true)
    }, 12000)
    return () => clearTimeout(timer)
  }, [])

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
          <source src="/video/hero.f137.mp4" type="video/mp4" />
          <source src="/video/hero.f140.m4a" type="audio/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20">
        <div className={`text-center transition-opacity duration-1000 ${showLogo ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src="/assets/images/logo_white.png"
            alt="Fitzgerald Home Interiors Logo"
            width={500}
            height={250}
            className="object-contain mb-8"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default HeroVideo 