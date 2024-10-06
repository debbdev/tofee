import Image from "next/image";
import React from "react";

interface InfoProps {
  value: string;
}

const Info: React.FC<InfoProps> = ({ value }) => {
  return (
    <>
      {value ? (
        <Image src={value} alt="Info" width={20} height={20} />
      ) : (
        <div>No Image</div> // Fallback if value is empty or undefined
      )}
    </>
  );
};

export default Info;
