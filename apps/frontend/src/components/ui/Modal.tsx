import React, { useState } from "react";

interface Props {
  closeButton?: boolean;
  children: React.ReactNode;
}

export default function Modal({ children, closeButton = false }: Props) {

//   #TODO: Make a unmount function because when the modal is closed the parent state might not be updated

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-4/5 md:w-1/3 lg:1/4">
        <div className="flex justify-end">
          {closeButton && (
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          )}
        </div>
        <div className="flex flex-col items-center">{children}</div>
      </div>
    </div>
  );
}
