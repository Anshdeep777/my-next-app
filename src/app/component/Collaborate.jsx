'use client'
import React from 'react';
import { Lightbulb, PenTool, BookOpen, Coffee, Sparkles, FileText, MessageSquare, Zap } from 'lucide-react';
import { LuMessageSquareShare } from "react-icons/lu";

const FloatingIcon = ({ Icon, className, delay = 0 }) => (
  <div 
    className={`absolute opacity-30 ${className}`}
    style={{
      animation: `float ${20 + delay}s ease-in-out infinite`,
      animationDelay: `${delay}s`
    }}
  >
    <Icon size={32} className="text-blue-600" />
  </div>
);

export default function Collaborate() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center h-screen gap-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      
      {/* Floating background icons */}
      <FloatingIcon Icon={PenTool} className="top-20 left-20" delay={0} />
      <FloatingIcon Icon={BookOpen} className="top-40 right-32" delay={2} />
      <FloatingIcon Icon={Coffee} className="bottom-32 left-40" delay={4} />
      <FloatingIcon Icon={Sparkles} className="top-32 left-1/3" delay={1} />
      <FloatingIcon Icon={FileText} className="bottom-40 right-20" delay={3} />
      <FloatingIcon Icon={MessageSquare} className="top-1/2 right-40" delay={5} />
      <FloatingIcon Icon={Zap} className="bottom-20 left-1/4" delay={2.5} />
      <FloatingIcon Icon={Lightbulb} className="top-1/4 right-1/4" delay={1.5} />

      {/* Gradient orbs for modern depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
      
      {/* Bottom-left quarter circle */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-tr-full opacity-30"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-bl-full opacity-30"></div>


      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-center">
            Want to conduct events?
          </h1>
          <h1 className="text-6xl font-bold text-slate-800 text-center">
            conduct event with us
          </h1>
        </div>

        <button className="group relative rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-1 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <div className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-12 py-6 flex items-center justify-center gap-4">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
             <LuMessageSquareShare  className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-medium text-white">Contact us</span>
            <span className="text-3xl text-white/80 group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </button>

        {/* Subtle accent elements */}
        <div className="flex gap-4 mt-8">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(10px) translateX(-10px);
          }
          75% {
            transform: translateY(-10px) translateX(5px);
          }
        }
      `}</style>
    </div>
  );
}
