"use client";
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { IoAdd } from 'react-icons/io5';
import { useCreatePostDataMutation } from '@/lib/redux/features/api/postApi';
import { Bounce, toast } from 'react-toastify';

const AddPost= () => {
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  });

  const [onPost, {isSuccess, isError,isLoading, error}] = useCreatePostDataMutation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



   // Toast for success notification
   useEffect(() => {
    if (isSuccess) {
      toast.success("Post created successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }, [isSuccess]);

  // Toast for error notification
  useEffect(() => {
    if (isError) {
      const errorMessage = "Failed to create post. Please try again.";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }, [isError, error]);

  const handleSubmit = async() => {
    await onPost(formData)
    console.log('Form submitted', formData);
  };

  return (
    <Modal
    disabled = {isLoading}
    onClick={handleSubmit}
    buttonLabel='Submit Post'
    title='Create a New Post'
    modalName ={<div  className="flex justify-center">
      <span className="flex justify-center cursor-pointer w-full items-center py-2 bg-green-400 hover:bg-transparent hover:border hover:border-emerald-500 dark:hover:text-gray-100 hover:text-gray-800 rounded-full  transition-all   duration-300">
        <IoAdd className="mr-2 text-xl" />
        <span className="text-lg">Post Now</span>
      </span>
    </div>}
    >
      <div
      
      className="w-full "
    >

      <div className="space-y-6">
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 placeholder-gray-500 dark:placeholder-gray-400"
            placeholder="Enter post title"
            required
          />
        </div>

        {/* Body Input */}
        <div>
          <label htmlFor="body" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
           Write post description
          </label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 placeholder-gray-500 dark:placeholder-gray-400"
            placeholder="Enter post content"
            required
          />
        </div>

       
      </div>
    </div>
    </Modal>
  );
};

export default AddPost;
