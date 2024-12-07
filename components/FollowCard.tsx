import { FaUser } from "react-icons/fa";
import React from "react";
import Image from "next/image";

// Define the props interface for better type safety
interface FollowCardProps {
  image: string | undefined;  // Image is either a string (URL) or undefined
  name: string;
  location: string;
  toFollow?: boolean;
  loading?: boolean;
}

const FollowCard = ({
  image,
  name,
  location,
  toFollow,
  loading,
}: FollowCardProps) => {
  if (loading) {
    return (
      <div className="flex cursor-pointer hover:bg-white/50 hover:dark:bg-white/10 items-center p-4 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-800/20 duration-300 animate-pulse">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="ml-4 flex-1">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
        {toFollow && (
          <div className="ml-auto w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
        )}
      </div>
    );
  }

  return (
    <div className="flex cursor-pointer hover:bg-black/10 hover:dark:bg-white/10  items-center p-4 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-800/20 duration-300">
      {/* Profile Image */}
      <div className="flex-shrink-0 w-12 h-12 overflow-hidden rounded-full border-2 border-gray-300 dark:border-gray-800">
        {image ? (
          <Image
            height={50}
            width={50}
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-800">
            <FaUser className="text-gray-500 dark:text-gray-400 text-2xl" />
          </div>
        )}
      </div>

      {/* User Info */}
      <div className="ml-4 truncate pr-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
          {name}
        </h3>
        <p className="text-sm text-gray-500">{location}</p>
      </div>

      {/* Follow Button */}
      {toFollow && (
        <button className="ml-auto px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors duration-300">
          Follow
        </button>
      )}
    </div>
  );
};

export default FollowCard;
