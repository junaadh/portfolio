import React from "react";

interface ProgressProps {
  language: string;
  percentage: number;
}

const Progress: React.FC<ProgressProps> = ({ language, percentage }) => {
  const progressBarStyle = {
    width: `${percentage}%`,
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex w-full h-full sm:px-10 sm:pr-4 mt-2 px-3 sm:pl-[30px]">
          <div className="flex h-full w-full">
            <div className="dark:text-orange-600/60 text-orange-800 text-bold text-lg">
              {language} ({percentage.toFixed(2)}%)
            </div>
          </div>
          <div className="flex h-full w-full">
            <div
              className="bg-orange-600 h-3 border border-orange-600 mt-2"
              style={progressBarStyle}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
