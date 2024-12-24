import React from "react";

interface ProgressProps {
  value: boolean;
}

export const Progress: React.FC<ProgressProps> = ({ value }) => {
  const displayValue = value ? 100 : 0;

  return (
    <div className="h-5 w-full rounded-lg bg-primary-100">
      {value ? (
        <div
          className="flex h-5 items-center justify-center rounded-lg bg-primary-500"
          style={{ width: `${displayValue}%` }}
        >
          <span className=" text-white">{displayValue}%</span>
        </div>
      ) : (
        <p className="rounded-lg bg-primary-500 text-center">SUCCESS</p>
      )}
    </div>
  );
};
