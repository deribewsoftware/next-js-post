"use client";
import { useGetUserDataQuery } from '@/lib/redux/features/api/usersApi';
import { motion } from 'framer-motion'
import Image from 'next/image';
import React from 'react'
import { FaEdit, FaTrash, FaUserCircle } from 'react-icons/fa' // Importing icons for edit, delete, and default user profile
import EditPost from './EditPost';
import DeletePost from './DeletePost';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

// Card data interface
interface CardProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  commentCount?: number; // Number of comments
}

const PostCard = ({ cardData }: { cardData: CardProps }) => {
  // Static values for userName, userImage, and commentCount
  const staticUserData = {
    commentCount: cardData.commentCount || 10, // Example number of comments if not provided
  };

  const {data:user}=useGetUserDataQuery(cardData.userId)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className=" cursor-pointer  w-full border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-800/20  rounded-lg overflow-hidden group"
    >
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          {user?.userImage ? (
            <Image
            height={50}
            width={50}
              src={staticUserData.userImage}
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <FaUserCircle size={40} className="text-gray-500" /> // Default user icon if no image is provided
          )}
          <div>
            <h3 className="text-lg font-semibold">{user?.name}</h3>
            <p className="text-sm text-gray-500">{user?.address.city}, {user?.address.street}</p>
          </div>
        </div>

        <h4 className="text-xl font-semibold mb-3">{cardData.title}</h4>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-5">{cardData.body}</p>

        <div className="flex justify-between h-5 items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">{staticUserData.commentCount} Comments</span>
          </div>
          <div className="hidden group-hover:block">
          <div className="flex  transition-all items-center space-x-3">
          <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <EditPost postData={cardData}/>
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit Post</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <DeletePost postData={cardData}/>
        </TooltipTrigger>
        <TooltipContent>
          <p>Delete Post</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
           
        
          </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PostCard
