import Image from "next/image";
import About from "./component/About"; // ✅ Make sure folder name is correct

export default function Home() {
  return (
    <div className="w-full">
      {/* Main Section */}
      <div className="w-full h-[600px] flex">
        {/* Left half */}
        <div className="w-2/5 h-full flex flex-col items-center justify-center p-10 ">
          {/* Logo */}
          <div className="mb-6">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={120} 
              height={120} 
            
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl font-extrabold text-gray-900 mb-3 text-center leading-tight">
            Beyond <span className="text-blue-600">Mobility</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg text-center max-w-md mb-6">
            Discover amazing content, explore our latest projects, and stay updated with what we are building for the future.
          </p>

          {/* CTA Button */}
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg transition">
            Explore Now 🚀
          </button>
        </div>

        {/* Right half with video */}
        <div className="w-3/5 h-full flex items-center justify-center bg-gray-200">
          <video 
            src="/car.mp4"
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="w-full text-center py-16">
       
        <About />
      </div>
    </div>
  );
}
