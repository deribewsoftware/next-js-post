"use client";
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { FaEdit } from 'react-icons/fa';
import { useEditPostDataMutation } from '@/lib/redux/features/api/postApi';
import { Bounce, toast } from 'react-toastify';

const EditPost = ({ postData }: { postData: any }) => {
  // Set up the mutation hook to handle the post edit
  const [onEdit, { isLoading, isSuccess, isError, data, error }] = useEditPostDataMutation();

  const [formData, setFormData] = useState({
    title: postData?.title || '',
    body: postData?.body || '',
  });

  // Log for debugging purposes
  console.log("postData", postData);
  console.log("data", data);
  console.log("error", error);

  // Update form data when postData changes
  useEffect(() => {
    if (postData) {
      setFormData({
        title: postData.title,
        body: postData.body,
      });
    }
  }, [postData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(()=>{
    if(isSuccess){
      
      toast.success("Post updated successfully!", {
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
  },[isSuccess]);

  useEffect(()=>{
    if(isError){
      
      toast.error("Failed to update post. Please try again.", {
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
  },[isError]);

  const handleSubmit = async () => {
      await onEdit({ id: postData.id, data: formData });
   
  };

  return (
    <Modal
      disabled={isLoading} // Disable modal button while loading
      onClick={handleSubmit} // Pass the form submission handler
      buttonLabel={isLoading ? 'Submitting...' : 'Submit Post'}
      title="Edit The Post"
      modalName={
        <button className="text-gray-500 w-6 hover:text-gray-800">
          <FaEdit size={18} />
        </button>
      }
    >
      <div className="w-full">
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
              value={formData.title} // Controlled input
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
              value={formData.body} // Controlled input
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

export default EditPost;
