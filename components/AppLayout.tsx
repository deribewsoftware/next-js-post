"use client";

import React, { useState, useEffect } from "react";
import { useGetPostsDataQuery } from "@/lib/redux/features/api/postApi";
import PostCard from "./PostCard";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import PostCardSkeleton from "./PostCardSkeleton";

// Card data interface
interface CardProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const AppLayout = () => {
  const { data, isLoading, isSuccess } = useGetPostsDataQuery("");
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const isAtFooter = window.innerHeight >= footerTop;
        setAtFooter(isAtFooter);
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on mount

    // Cleanup scroll listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="xl:container p-4 gap-5 grid grid-cols-1 lg:grid-cols-12 min-h-screen">
      {/* Left Sidebar */}
      <div className="col-span-3 hidden lg:block">
        <div
          className={`transition-all duration-300 ${
            atFooter ? "absolute bottom-0" : "fixed top-20"
          } xl:left-10 w-[300px] pl-2 xl:pl-10 border-l border-gray-300 dark:border-gray-800 overflow-y-auto`}
        >
          <LeftSide />
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-6 space-y-4 pb-20 border-x border-gray-300 dark:border-gray-800 px-3 xl:px-6 overflow-y-auto mt-20">
        {isSuccess &&
          data?.length > 0 &&
          data.map((cardData: CardProps) => (
            <PostCard cardData={cardData} key={cardData.id} />
          ))}
        {isLoading &&
          Array.from({ length: 6 }).map((_, index) => (
            <PostCardSkeleton key={index} />
          ))}
      </div>

      {/* Right Sidebar */}
      <div className="col-span-3 hidden lg:block">
        <div
          className={`transition-all duration-300 ${
            atFooter ? "absolute bottom-0" : "fixed top-20"
          } xl:right-10 w-[300px] xl:mr-6 p-2 border-r pb-20 h-screen border-gray-300 dark:border-gray-800 overflow-y-auto`}
        >
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
