"use client";

import React from "react";

// FollowSkeletonCard Component
const FollowSkeletonCard = () => {
  return (
    <div className="flex items-center p-4 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-800/20 duration-300 ">
      {/* Skeleton Profile Image */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>

      {/* Skeleton User Info */}
      <div className="ml-4 flex-1">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
      </div>

      
    </div>
  );
};

export default FollowSkeletonCard;
