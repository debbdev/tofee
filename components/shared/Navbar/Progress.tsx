import React from "react";

interface ProgressProps {
  value: number;
}

export const Progress: React.FC<ProgressProps> = ({ value }) => {
  return (
    <div className="h-5 w-full rounded-lg bg-primary-100">
      <div
        className="flex h-5 items-center justify-center rounded-lg bg-primary-500"
        style={{ width: `${value}%` }}
      >
        <span className="text-white">{value}%</span>
      </div>
    </div>
  );
};
