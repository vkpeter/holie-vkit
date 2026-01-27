import * as React from "react";

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
  fallback?: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt = "Avatar", size = 40, className = '', fallback }) => {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-gray-200 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      {src ? (
        <img src={src} alt={alt} className="object-cover w-full h-full" />
      ) : (
        fallback || <span className="text-gray-500 text-sm">?</span>
      )}
    </span>
  );
};
