"use client"

import { useState, useEffect } from 'react';

interface LoadingComponentProps {
  onComplete: () => void;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        clearInterval(interval);
        onComplete();
      }
    }, 20);

    return () => clearInterval(interval);
  }, [progress, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-80 h-2 bg-gray rounded overflow-hidden mb-2">
        <div className="h-full bg-blue" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-3xl text-gray">Loading: {progress}%</p>
    </div>
  );
};

export default LoadingComponent;
