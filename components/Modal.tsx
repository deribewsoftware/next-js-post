"use client";

import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { GrClose } from 'react-icons/gr';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
  children: ReactNode;
  title?: string;
  buttonLabel?: string;
  onClick?: () => void;
  modalName: ReactNode;
  disabled?: boolean;
  className?: string;
  contentClass?:string;
}

const Modal: React.FC<ModalProps> = ({contentClass, className, disabled, children, title, buttonLabel, onClick, modalName }) => {
  const [isOpen, setOpen] = useState(false);

  const handleButtonClick = () => {
    if (onClick) onClick();

    // Automatically close the modal after a delay (e.g., 2 seconds)
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  return (
    <>
      <div 
        onClick={() => setOpen(prev => !prev)}
        className={cn(
          className,""
         
        )}
      >
        {modalName}
      </div>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto w-full">
          <div className="flex items-center justify-center min-h-screen text-center px-4 sm:px-0">
            <div
              onClick={() => setOpen(prev => !prev)}
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              aria-hidden="true"
            ></div>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              
            >
              <div className={`relative bg-white dark:bg-gray-800 rounded-lg w-3xl  shadow-xl transform transition-all sm:my-8 
                 ${contentClass}
                 sm:max-w-2xl w-full
             `}>
              <div className={`p-6 rounded-lg bg-white dark:bg-gray-800 `}>
                <div className="sm:flex sm:items-start"> 
                  <div className="text-left w-full">
                    <div className={`w-full pb-3 border-b border-gray-200 dark:border-gray-600 flex ${title ? 'justify-between' : 'justify-end'}`}>
                      {title && <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{title}</h3>}
                      <button
                        onClick={() => setOpen(false)}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white focus:outline-none"
                      >
                        <GrClose size={20} />
                      </button>
                    </div>
                    <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                      {children}
                    </div>
                    <div className="mt-5 sm:mt-6 flex justify-end gap-3">
                      <button
                        onClick={() => setOpen(false)}
                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      >
                        Cancel
                      </button>
                      {buttonLabel && (
                        <button
                          disabled={disabled}
                          onClick={handleButtonClick}
                          className={cn(
                            "inline-flex justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
                            disabled && "opacity-50 cursor-not-allowed"
                          )}
                        >
                          {disabled ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                          {buttonLabel}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;