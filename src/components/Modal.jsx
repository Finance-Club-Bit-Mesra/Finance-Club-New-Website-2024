import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Modal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transform scale-95 transition-transform duration-300"
      >
        
        <div className="flex justify-center items-center mb-4">
          <FaCheckCircle
            className="text-green-500 text-6xl"
          />
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
        
        <p className="text-center text-gray-600">{message}</p>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
