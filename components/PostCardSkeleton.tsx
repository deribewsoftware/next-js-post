"use client";
import { motion } from 'framer-motion'
import React from 'react';

const PostCardSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      
    >
      <div className="w-full border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-800/20 rounded-lg overflow-hidden">
      <div className="p-6 space-y-4">
        {/* User Avatar and Info */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
          <div className="space-y-2">
            <div className="w-24 h-4 bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
            <div className="w-36 h-3 bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
          </div>
        </div>

        {/* Post Title */}
        <div className="w-3/4 h-5 bg-gray-300 dark:bg-gray-600 animate-pulse"></div>

        {/* Post Body */}
        <div className="w-full h-12 bg-gray-300 dark:bg-gray-600 animate-pulse"></div>

        {/* Comment Section */}
        <div className="flex justify-between items-center">
          <div className="w-24 h-3 bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
          <div className="flex space-x-3">
            <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
            <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  );
};

export default PostCardSkeleton;
