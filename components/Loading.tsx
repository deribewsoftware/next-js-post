"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';


const LoadingComponent: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Loading", "Fetching Data", "Almost There", "Just a Moment"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  

  return (
      <motion.div
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
        <FaSpinner className="text-6xl text-emerald-500 animate-spin mb-6" />
        <h1
          key={currentWord}
          className="text-2xl font-bold text-emerald-500"
        
        >
          {words[currentWord]}
        </h1>
        </div>
      </motion.div>
  
  );
};

export default LoadingComponent;