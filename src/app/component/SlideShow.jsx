'use client'
import React, { useState, useEffect } from 'react';
import { BookImage } from 'lucide-react';

export default function CarouselSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const images = [
    { id: 1, url: 'https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?cs=srgb&dl=pexels-daniel-43199-158971.jpg&fm=jpg', title: 'Technex 24' },
    { id: 2, url: 'https://images.unsplash.com/photo-1682687221038-404cb8830901', title: 'Ocean Sunset' },
    { id: 3, url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538', title: 'Forest Path' },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  const getSlidePosition = (index) => {
    const diff = index - currentIndex;
    const total = images.length;

    if (diff === 0) return 0; // center
    if (diff === 1 || diff === -(total - 1)) return 1; // right
    if (diff === -1 || diff === total - 1) return -1; // left
    return diff > 0 ? 2 : -2; // far slides
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 px-4">
          <div className="flex flex-col items-center mb-6">
            <BookImage className="w-20 h-20 md:w-32 md:h-32 text-blue-600" />
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight leading-tight mt-4">
              Past Events Gallery
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-3 max-w-2xl mx-auto">
              Relive the moments, celebrate the achievements, and explore the vibrant history of our gatherings.
            </p>
          </div>
        </div>

        {/* Carousel Slides */}
        <div className="relative h-[500px] flex items-center justify-center">
          {images.map((image, index) => {
            const pos = getSlidePosition(index);

            return (
              <div
                key={image.id}
                className="absolute transition-transform duration-700 ease-out cursor-pointer will-change-transform"
                style={{
                  transform: pos === 0
                    ? 'translateX(0) scale(1) rotateY(0deg)'
                    : pos === 1
                    ? 'translateX(60%) scale(0.75) rotateY(-20deg)'
                    : pos === -1
                    ? 'translateX(-60%) scale(0.75) rotateY(20deg)'
                    : pos === 2
                    ? 'translateX(120%) scale(0.6) rotateY(-25deg)'
                    : 'translateX(-120%) scale(0.6) rotateY(25deg)',
                  zIndex: pos === 0 ? 30 : pos === 1 || pos === -1 ? 20 : 10,
                  opacity: Math.abs(pos) > 2 ? 0 : 1,
                  filter: pos === 0 ? 'brightness(1)' : 'brightness(0.6)',
                }}
                onClick={() => pos !== 0 && (setCurrentIndex(index), setIsAutoPlay(false))}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-[600px] h-[400px] object-cover"
                  />
                  {pos === 0 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white text-2xl font-bold">{image.title}</h3>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="px-6 py-3 rounded-full bg-blue-400 hover:bg-blue-500 backdrop-blur-sm transition-all text-white font-medium"
          >
            {isAutoPlay ? 'Pause' : 'Play'} Auto-Slide
          </button>
        </div>
      </div>
    </div>
  );
}
