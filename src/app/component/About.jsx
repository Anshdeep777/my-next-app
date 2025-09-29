"use client";
import { PencilRuler, Cog, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { useState } from 'react';

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 'innovation',
      icon: Lightbulb,
      title: 'INNOVATION',
      description: 'Fostering creative thinking and breakthrough solutions in automotive engineering through cutting-edge research and development.',
      color: 'blue',
      gradient: 'from-blue-500 via-blue-600 to-blue-700',
      hoverGradient: 'from-blue-400 via-blue-500 to-blue-600'
    },
    {
      id: 'design',
      icon: PencilRuler,
      title: 'DESIGN',
      description: 'Creating aesthetically pleasing and functionally superior automotive solutions through thoughtful design principles and user-centered approaches.',
      color: 'green',
      gradient: 'from-green-500 via-green-600 to-green-700',
      hoverGradient: 'from-green-400 via-green-500 to-green-600'
    },
    {
      id: 'technology',
      icon: Cog,
      title: 'TECHNOLOGY',
      description: 'Leveraging advanced technologies including AI, IoT, and sustainable engineering to drive the future of mobility solutions.',
      color: 'purple',
      gradient: 'from-purple-500 via-purple-600 to-purple-700',
      hoverGradient: 'from-purple-400 via-purple-500 to-purple-600'
    },
    {
      id: 'market',
      icon: TrendingUp,
      title: 'MARKET',
      description: 'Understanding industry trends and consumer needs to develop commercially viable and market-ready automotive solutions.',
      color: 'orange',
      gradient: 'from-orange-500 via-orange-600 to-orange-700',
      hoverGradient: 'from-orange-400 via-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="px-4 py-16 md:px-8 lg:px-12 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen rounded-xl shadow-lg">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
            variants={textVariants}
          >
            Driving Innovation Forward
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto"
            variants={textVariants}
          >
            The Society of Automotive Engineers (SAE) is a global organization committed to advancing mobility knowledge and engineering solutions for the benefit of humanity.
            Our SAE Collegiate Club provides students with a platform to innovate, design, and build, gaining valuable hands-on experience in automotive and mobility engineering.
            Through collaborative projects, workshops, and competitions, we empower students to turn ideas into real-world engineering solutions.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                className={`bg-gradient-to-br ${hoveredCard === card.id ? card.hoverGradient : card.gradient} 
                  p-8 lg:p-10 rounded-3xl shadow-xl text-center text-white min-h-[380px] 
                  flex flex-col items-center justify-center relative overflow-hidden cursor-pointer
                  transform transition-all duration-500 hover:shadow-2xl`}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredCard(card.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
                
                {/* Icon with enhanced animation */}
                <motion.div 
                  className="relative flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <motion.span 
                    className="absolute w-32 h-32 rounded-full border-2 border-white/30"
                    animate={{ rotate: hoveredCard === card.id ? 360 : 0 }}
                    transition={{ duration: 3, ease: "linear", repeat: hoveredCard === card.id ? Infinity : 0 }}
                  />
                  <motion.span 
                    className="absolute w-40 h-40 rounded-full border-2 border-white/20"
                    animate={{ rotate: hoveredCard === card.id ? -360 : 0 }}
                    transition={{ duration: 4, ease: "linear", repeat: hoveredCard === card.id ? Infinity : 0 }}
                  />
                  
                  <motion.div 
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${card.gradient} 
                      flex items-center justify-center relative z-10 shadow-lg border-4 border-white/20`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <IconComponent className="w-12 h-12 text-white" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="text-2xl lg:text-3xl font-bold mb-4 tracking-wide"
                  layoutId={`title-${card.id}`}
                >
                  {card.title}
                </motion.h3>
                
                <motion.p 
                  className="text-base lg:text-lg leading-relaxed mb-6 text-white/90"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {card.description}
                </motion.p>

                {/* Learn More Button */}
                <motion.div 
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider 
                    bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30
                    hover:bg-white/30 transition-all duration-300"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
        
        </motion.div>
      </div>
    </div>
  );
};

export default About;