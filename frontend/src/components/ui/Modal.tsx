import React from "react";

interface Props{
    children: React.ReactNode
}

export default function Modal({children }: Props){
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 w-4/5 md:w-1/3">
          <div className="flex justify-end">
            {/* <button
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              &times;
            </button> */}
          </div>
          <div className="flex flex-col items-center">{children}</div>
        </div>
      </div>
    );
  };