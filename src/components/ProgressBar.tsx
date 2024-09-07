import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <div className="w-full h-4 bg-slate-300 rounded-full dark:bg-slate-500">
            <div
                className="h-full bg-purple-600 dark:bg-purple-800 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
            >
            </div>
        </div>
    );
};

export default ProgressBar;
