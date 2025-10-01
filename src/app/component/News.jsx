'use client';
import React, { useState, useEffect } from 'react';
import { Megaphone, Trophy, Zap, Activity, Flag, ArrowUpRight } from 'lucide-react';

const News = () => {
  const [currentNews, setCurrentNews] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const newsItems = [
    { icon: <Trophy className="w-4 h-4 text-yellow-400" />, text: 'Formula Grand Prix starting in 2 hours' },
    { icon: <Trophy className="w-4 h-4 text-yellow-300" />, text: 'Championship standings updated' },
    { icon: <Zap className="w-4 h-4 text-blue-400" />, text: 'New speed records broken today' },
    { icon: <Activity className="w-4 h-4 text-red-400" />, text: 'Qualifying rounds live now' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <div className="w-full h-[70px] sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-500 flex items-center justify-between px-6 shadow-lg backdrop-blur-sm border-b border-blue-300/30 relative">

      {/* Left side */}
      <div className="flex items-center gap-4">
        <div className="relative ml-5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-12 h-12 rounded-full border border-white/30 animate-ping" style={{ animation: 'breathe-1 2s ease-in-out infinite' }}></div>
            <div className="absolute w-16 h-16 rounded-full border border-white/20 animate-ping" style={{ animation: 'breathe-2 2s ease-in-out infinite 0.3s' }}></div>
            <div className="absolute w-20 h-20 rounded-full border border-white/10 animate-ping" style={{ animation: 'breathe-3 2s ease-in-out infinite 0.6s' }}></div>
          </div>
          <div className="absolute inset-0 bg-white/20 rounded-full blur-md animate-pulse"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20 z-10">
            <Megaphone
              className={`w-6 h-6 text-white transition-transform duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}
            />
          </div>
        </div>

        <div className="flex flex-col overflow-hidden">
          <span className="text-white/80 text-xs font-medium uppercase tracking-wide ml-9">
            Live Racing Updates
          </span>
          <div className="overflow-hidden h-6 ml-8">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentNews * 24}px)` }}
            >
              {newsItems.map((news, index) => (
                <div key={index} className="h-6 flex items-center gap-1">
                  {news.icon}
                  <span className="text-white font-semibold text-sm whitespace-nowrap">{news.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <button
        className="group relative bg-white/15 backdrop-blur-sm text-white px-6 py-2.5 rounded-full hover:bg-white/25 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 active:scale-95"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[14px]">View All Updates</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>

      {/* Decorative elements */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 flex items-center gap-2">
        <Flag className="w-8 h-8 text-white" />
        <Trophy className="w-6 h-6 text-yellow-300" />
        <Zap className="w-7 h-7 text-blue-300" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-100 animate-pulse"></div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes breathe-1 { 0%,100%{transform:scale(0.8);opacity:1}50%{transform:scale(1.1);opacity:0.7} }
        @keyframes breathe-2 { 0%,100%{transform:scale(0.7);opacity:0.8}50%{transform:scale(1.2);opacity:0.4} }
        @keyframes breathe-3 { 0%,100%{transform:scale(0.6);opacity:0.6}50%{transform:scale(1.3);opacity:0.2} }
      `}</style>
    </div>
  );
};

export default News;
