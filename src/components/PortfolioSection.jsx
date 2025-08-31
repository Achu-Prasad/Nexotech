import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import img1 from "../pics/1.webp";
import img2 from "../pics/2.webp";
import img3 from "../pics/3.webp";
import img4 from "../pics/4.webp";
import img5 from "../pics/5.webp";

// --- 1. Project Data ---
const projects = [
  {
    category: "Websites",
    title: "Golden Ray",
    image: img1,
    tags: ["Website", "SaaS", "React"],
    serviceType: "Web Development",
    technology: "React",
    description: "A premium website in progress for one of Kerala's emerging solar EPC leaders. Built to reflect trust, quality, and customer-first values."
  },
  {
    category: "CRM'S",
    title: "RealtyFlow CRM",
    image: img2,
    tags: ["CRM", "Dashboard", "Vue.js"],
    serviceType: "Enterprise Software",
    technology: "Vue.js",
    description: "A comprehensive CRM solution for real estate agencies to manage leads, properties, and client communications seamlessly."
  },
  {
    category: "Mobile Apps",
    title: "FitTrack Mobile",
    image: img3,
    tags: ["Mobile App", "Fitness", "React Native"],
    serviceType: "Mobile App",
    technology: "React Native",
    description: "A cross-platform mobile application that helps users track their workouts, nutrition, and progress towards their fitness goals."
  },
  {
    category: "Software's",
    title: "Inventory Master",
    image: img4,
    tags: ["Software", "Logistics", "Electron"],
    serviceType: "Desktop Software",
    technology: "Electron",
    description: "Desktop software for warehouse management, providing real-time inventory tracking, order processing, and reporting."
  },
  {
    category: "Custom Builds",
    title: "IoT Smart Home",
    image: img5,
    tags: ["IoT", "Custom Hardware", "C++"],
    serviceType: "IoT Solution",
    technology: "C++",
    description: "A custom-built IoT controller and software suite for home automation, integrating lighting, climate, and security systems."
  }
];

const categories = [...new Set(projects.map(p => p.category))];

const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationProgress, setAnimationProgress] = useState(0);
  const navItemsRef = useRef([]);
  const cardRef = useRef(null);
  const intervalRef = useRef(null);
  const progressRefs = useRef([]);

  const DURATION_SECONDS = 5;

  // --- 2. Animation and Interval Logic ---
  useEffect(() => {
    // Reset all progress bars first
    progressRefs.current.forEach((progressRef, index) => {
      if (progressRef) {
        gsap.set(progressRef, { scaleX: 0 });
      }
    });

    // Start animation only on the active item
    const activeProgressRef = progressRefs.current[activeIndex];
    if (activeProgressRef) {
      gsap.fromTo(activeProgressRef, 
        { scaleX: 0 },
        { 
          scaleX: 1, 
          duration: DURATION_SECONDS,
          ease: 'none',
          onUpdate: function() {
            setAnimationProgress(this.progress() * 100);
          },
          onComplete: () => {
            handleNext();
          }
        }
      );
    }

    // Animate card transition
    const tl = gsap.timeline();
    tl.to(cardRef.current, { opacity: 0, y: 20, duration: 0.3, ease: 'power2.in' })
      .to(cardRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });

    // Cleanup function to kill any running animations
    return () => {
      progressRefs.current.forEach((progressRef) => {
        if (progressRef) {
          gsap.killTweensOf(progressRef);
        }
      });
    };
  }, [activeIndex]);

  // --- 3. Handlers for Navigation ---
  const handleTabClick = (index) => {
    if (index !== activeIndex) {
      // Kill all current animations
      progressRefs.current.forEach((progressRef) => {
        if (progressRef) {
          gsap.killTweensOf(progressRef);
        }
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const currentProject = projects[activeIndex];

  return (
    <div className="w-full bg-[#F3F4F8] font-sora flex flex-col items-center py-8 md:py-20 px-4">
      {/* Top Navigation */}
      <div className="relative mb-8 md:mb-12 w-full max-w-4xl">
        <nav className="grid grid-cols-2 gap-2 sm:gap-3 md:flex md:flex-wrap md:justify-center md:space-x-4 lg:space-x-8">
          {categories.map((category, index) => (
            <div key={category} className="relative flex-shrink-0">
              <button
                ref={el => navItemsRef.current[index] = el}
                onClick={() => handleTabClick(index)}
                className={`relative py-3 px-2 md:px-4 text-xs md:text-sm lg:text-base font-medium transition-colors duration-300 text-center whitespace-nowrap w-full
                  ${activeIndex === index ? 'text-gray-900' : 'text-gray-400 hover:text-gray-700'}`}
              >
                {category}
              </button>
              {/* Individual underline for each item */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
                <div 
                  ref={el => progressRefs.current[index] = el}
                  className="h-full bg-[#19195E] origin-left"
                  style={{ transform: 'scaleX(0)' }}
                />
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content Card - Separated from description/navigation */}
      <div ref={cardRef} className="w-full max-w-4xl">
        <div className="bg-white overflow-hidden mb-8" style={{ borderRadius: '40px' }}>
          {/* Image Section - Increased height, removed border */}
          <div style={{ paddingTop: '6px', paddingLeft: '6px', paddingRight: '6px' }}>
            <div className="relative overflow-hidden" style={{ borderRadius: '36px' }}>
              <img 
                src={currentProject.image} 
                alt={currentProject.title}
                className="w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Content Section - Removed margin on small screens */}
          <div style={{ paddingLeft: '16px', paddingRight: '16px', paddingBottom: '20px' }} className="flex flex-col h-full">
            <div className="flex-1 mt-6">
              <div className="flex flex-col space-y-2 lg:flex-row lg:justify-between lg:items-start lg:space-y-0">
                <div className="flex-1">
                  <h2 className="mx-4 text-md sm:text-2xl md:text-2xl font-sora font-medium text-gray-800">
                    {currentProject.title}
                  </h2>
                </div>
                
                {/* Information Display - Removed margin on small screens */}
                <div className="flex items-start justify-start lg:justify-end lg:mt-0">
                  <div className="flex items-center space-x-2 px-0 py-0 lg:px-2 lg:py-1" style={{ borderRadius: '12px' }}>
                    <div className="hidden md:flex gap-1 mx-4">
                      {currentProject.tags.map(tag => (
                        <span key={tag} className="text-gray-700 text-xs sm:text-sm font-mono px-2 py-1 rounded-md whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="w-px h-5 bg-gray-300 flex-shrink-0 mx-1"></div>
                    <div className="bg-transparent p-1 flex-shrink-0" style={{ borderRadius: '12px' }}>
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separated Description and Navigation Section */}
        <div className="w-full px-4 md:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            {/* Description */}
            <div className="flex-1 lg:pr-8">
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {currentProject.description}
              </p>
            </div>
            
            {/* Navigation Section */}
            <div className="flex items-center space-x-6">
              {/* Navigation dots */}
              <div className="flex space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`w-2 h-2 transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-[#19195E] w-8 h-2' 
                        : 'bg-gray-300'
                    }`}
                    style={{ borderRadius: '4px' }}
                  />
                ))}
              </div>
              
              {/* Navigation arrows - 12px corner radius */}
              <div className="flex space-x-3">
                <button 
                  onClick={handlePrev} 
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 transition-colors duration-300 flex items-center space-x-2"
                  style={{ borderRadius: '12px' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Prev</span>
                </button>
                <button 
                  onClick={handleNext} 
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 transition-colors duration-300 flex items-center space-x-2"
                  style={{ borderRadius: '12px' }}
                >
                  <span className="text-sm font-medium">Next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
