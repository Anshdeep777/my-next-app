'use client'
import React, { useState } from 'react';

import { Pen, Filter, Clock, ArrowUpRight, TrendingUp, Sparkles, Lightbulb } from 'lucide-react';

import BlogHero from '../component/BlogHero';
import Footer from '../component/Footer';

const Page = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'AI/ML', 'Design', 'Innovation', 'Cloud'];
  
  const featuredBlogs = [
    {
      id: 1,
      title: "The AI Revolution: Transforming Tomorrow",
      excerpt: "Discover how artificial intelligence is reshaping industries and creating unprecedented opportunities for innovation across the globe.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      category: "AI/ML",
      readTime: "5 min",
      trending: true
    },
    {
      id: 2,
      title: "Cloud Architecture: Building the Future",
      excerpt: "Explore cutting-edge cloud solutions that are revolutionizing how businesses scale and operate in the digital age.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
      category: "Cloud",
      readTime: "7 min",
      trending: false
    }
  ];

  const blogCards = [
    {
      id: 3,
      title: "Design Systems at Scale",
      excerpt: "Creating cohesive design languages that power modern applications.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
      category: "Design",
      readTime: "4 min"
    },
    {
      id: 4,
      title: "Quantum Computing Breakthrough",
      excerpt: "The next frontier in computational power is closer than ever.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
      category: "Innovation",
      readTime: "6 min"
    },
    {
      id: 5,
      title: "Sustainable Tech Solutions",
      excerpt: "How technology is leading the charge in environmental conservation.",
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
      category: "Innovation",
      readTime: "5 min"
    },
    {
      id: 6,
      title: "Neural Networks Explained",
      excerpt: "Deep dive into the architecture powering modern AI systems.",
      image: "https://images.unsplash.com/photo-1680868543815-b8666dba60f7",
      category: "AI/ML",
      readTime: "8 min"
    },
    {
      id: 7,
      title: "The Metaverse Economy",
      excerpt: "Virtual worlds are creating real economic opportunities.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
      category: "Innovation",
      readTime: "5 min"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative w-full min-h-screen">
        {/* Header Section */}
        <div className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-4 flex-col mb-12">
              <div className="relative">
                <div className="p-5 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <Pen className="text-3xl text-white" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                </div>
              </div>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider">Insights & Innovation</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 rounded-full"></div>
            </div>

            {/* Hero Title */}
            <h1 className="text-5xl md:text-7xl text-center font-black max-w-5xl mx-auto leading-tight mb-6 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-700 bg-clip-text text-transparent">
              Breaking Boundaries with Innovation
            </h1>
            <p className="text-center text-lg text-slate-600 max-w-2xl mx-auto mb-12">
              Explore cutting-edge insights, breakthrough technologies, and transformative ideas shaping our digital future.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white hover:shadow-md border border-slate-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
              <button className="px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 shadow-lg transform hover:scale-105">
                <Filter className="w-4 h-4" /> Advanced
              </button>
            </div>

            {/* Featured Blog Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {blog.trending && (
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> Trending
                    </div>
                  )}
                  <div className="h-64 relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full mb-2">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-slate-600 mb-6 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{blog.readTime} read</span>
                      </div>
                      <button className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/btn">
                        Read Article 
                        <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {blogCards.slice(0, 3).map((blog) => (
                <div
                  key={blog.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-md">
                        {blog.category}
                      </span>
                      <span className="text-slate-500 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {blog.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center gap-1 group/link">
                      Read more 
                      <ArrowUpRight className="w-3 h-3 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Blog Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {blogCards.slice(3, 5).map((blog) => (
                <div
                  key={blog.id}
                  className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 p-6 md:p-8">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs font-semibold rounded-md mb-3">
                      {blog.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {blog.readTime} read
                      </span>
                      <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-1 group/link">
                        Explore 
                        <ArrowUpRight className="w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </div>
      
<BlogHero/>
<Footer/>

    </div>
  );
};

export default Page;