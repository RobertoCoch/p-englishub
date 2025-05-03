import { useEffect, useState } from "react";

const ProgressBar = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simula una animación progresiva hacia el valor deseado
    const timeout = setTimeout(() => setProgress(value), 100);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="w-10/10 h-4 bg-gray-300 rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-500 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
