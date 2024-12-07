import React, { useEffect } from 'react';
import Modal from './Modal';
import { FaTrash } from 'react-icons/fa';
import { useDeletePostDataMutation } from '@/lib/redux/features/api/postApi';
import { Bounce, toast } from 'react-toastify';

// Define the Post interface
interface Post {
  id: number;
  title: string;
  body: string;
}

const DeletePost = ({ postData }: { postData: Post }) => {
  const [onDelete, { isError, isSuccess, isLoading }] = useDeletePostDataMutation();

  // Success toast
  useEffect(() => {
    if (isSuccess) {
      toast.success("Post deleted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light", // Can be "dark" or "light" depending on the theme
        transition: Bounce,
      });
    }
  }, [isSuccess]);

  // Error toast
  useEffect(() => {
    if (isError) {
      toast.error("Failed to delete post. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light", // Can be "dark" or "light" depending on the theme
        transition: Bounce,
      });
    }
  }, [isError]);

  const handleDelete = async () => {
    await onDelete(postData.id);
    // Logic to delete the post (e.g., calling a mutation or API)
    console.log('Post deleted:', postData.id);
  };

  return (
    <Modal
      onClick={handleDelete}
      disabled={isLoading}
      buttonLabel="Confirm Delete"
      title="Are you sure you want to delete this post?"
      modalName={
        <button className="text-gray-500 hover:text-red-500">
          <FaTrash size={18} />
        </button>
      }
    >
      <div className="space-y-4">
        {/* Warning Message */}
        <p className="text-sm text-red-600">
          <strong>Warning:</strong> Deleting this post is a permanent action and cannot be undone.
        </p>

        {/* Confirmation Message */}
        <p className="text-sm text-gray-700 dark:text-gray-400">
          Are you sure you want to delete the post titled <strong>{postData?.title}</strong>? This action cannot be reversed.
        </p>
      </div>
    </Modal>
  );
};

export default DeletePost;
