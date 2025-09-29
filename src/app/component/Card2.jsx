import React from 'react';
import { Rocket, ArrowRight, MousePointer2 } from 'lucide-react';

export default function Card() {
  return (
    <div className="  flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Rocket Icon Section */}
        <div className="bg-gray-50 py-8 flex justify-center">
          <div className="relative">
            <Rocket className="w-16 h-16 text-orange-500" strokeWidth={1.5} />
           
          </div>
        </div>

        {/* Card Content with Gradient */}
        <div className="relative bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 p-10 pb-16">
          {/* Wave Effect at Top */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gray-50">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z"
                fill="url(#gradient)"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgb(249 115 22)" />
                  <stop offset="100%" stopColor="rgb(251 146 60)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 text-white text-center space-y-6 mt-4">
            <h2 className="text-4xl font-light tracking-wide">Develope</h2>
            
            <p className="text-orange-50 text-lg leading-relaxed opacity-90">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut...
            </p>

            {/* Arrow Icon */}
            <div className="flex justify-center pt-4">
              <ArrowRight className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
          </div>

          {/* Cursor Icon */}
          <div className="absolute bottom-6 right-6">
            <MousePointer2 className="w-8 h-8 text-white drop-shadow-lg" fill="white" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </div>
  );
}