import React from 'react';

const PrevButton = ({ 
  onClick, 
  disabled = false, 
  text = "Prev",
  variant = "default",
  size = "default",
  className = '' 
}) => {
  // Variant styles
  const variants = {
    default: "bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-700",
    primary: "bg-blue-100 hover:bg-blue-200 border-blue-200 text-blue-700",
    secondary: "bg-purple-100 hover:bg-purple-200 border-purple-200 text-purple-700"
  };

  // Size styles
  const sizes = {
    sm: "px-3 py-2 gap-2 text-xs",
    default: "px-4 py-3 gap-3 text-sm",
    lg: "px-6 py-4 gap-4 text-base"
  };

  // Icon sizes
  const iconSizes = {
    sm: "w-4 h-4",
    default: "w-5 h-5",
    lg: "w-6 h-6"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center 
        ${sizes[size]}
        ${variants[variant]}
        rounded-xl border
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        group hover:shadow-sm
        ${className}
      `}
    >
      {/* Icon placeholder - replace with your custom icon */}
      <div className={`
        ${iconSizes[size]} 
        bg-gray-400 rounded-sm flex-shrink-0 
        group-hover:bg-gray-500 transition-colors duration-200
      `} />
    </button>
  );
};

export default PrevButton;
