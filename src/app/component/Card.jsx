import React from 'react';
import { Rocket, ArrowRight, MousePointer2, Sparkles } from 'lucide-react';

export default function Card() {
  return (
    <div className="flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        
        {/* Enhanced Rocket Icon Section */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 py-12 flex justify-center relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 left-8 w-16 h-16 bg-orange-400 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 right-8 w-20 h-20 bg-blue-400 rounded-full blur-xl"></div>
          </div>
          
          <div className="relative">
            {/* Floating animation container */}
            <div className="animate-float">
              <Rocket className="w-20 h-20 text-orange-500 drop-shadow-lg" strokeWidth={1.2} />
            </div>
            
            {/* Sparkle effects */}
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
            <Sparkles className="absolute -bottom-1 -left-2 w-4 h-4 text-blue-400 animate-pulse delay-300" />
          </div>
        </div>

        {/* Enhanced Gradient Section */}
        <div className="relative bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500 p-10 pb-20 overflow-hidden">
          
          {/* Elegant wave effect */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-white">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0,20 C400,80 800,0 1200,30 L1200,120 L0,120 Z"
                fill="currentColor"
                className="text-white"
              />
            </svg>
          </div>

          {/* Subtle background shine */}
          <div className="absolute top-1/4 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 -left-20 w-40 h-40 bg-amber-200/20 rounded-full blur-2xl"></div>

          <div className="relative z-10 text-white text-center space-y-8 mt-6">
            {/* Enhanced Typography */}
            <div className="space-y-2">
              <h2 className="text-5xl font-light tracking-wider bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
                Develop
              </h2>
              <div className="w-16 h-0.5 bg-white/30 mx-auto rounded-full"></div>
            </div>
            
            {/* Improved text styling */}
            <p className="text-amber-50 text-lg leading-relaxed font-light tracking-wide opacity-95 px-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>

            {/* Enhanced Arrow with hover effect */}
            <div className="flex justify-center pt-6">
              <div className="group cursor-pointer transform transition-all duration-300 hover:translate-x-2">
                <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm border border-white/30">
                  <ArrowRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Cursor Icon */}
          <div className="absolute bottom-8 right-8 group">
            <div className="relative">
              <MousePointer2 
                className="w-10 h-10 text-white drop-shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" 
                fill="white" 
                strokeWidth={1.2} 
              />
              <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
