import React from 'react';

export const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition ${className}`}
    >
      {children}
    </button>
  );
};
