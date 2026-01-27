import * as React from "react";

export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export const Skeleton: React.FC<SkeletonProps> = ({ width = '100%', height = 16, className = '', style }) => {
  return (
    <span
      className={`inline-block bg-gray-200 animate-pulse rounded ${className}`}
      style={{ width, height, ...style }}
    />
  );
};
