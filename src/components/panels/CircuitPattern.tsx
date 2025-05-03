
import React from 'react';

interface CircuitPatternProps {
  className?: string;
}

const CircuitPattern: React.FC<CircuitPatternProps> = ({ className }) => {
  return (
    <div className={`${className} absolute inset-0 opacity-20 pointer-events-none`}>
      <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="2" fill="#6366F1" />
        <circle cx="30" cy="10" r="2" fill="#6366F1" />
        <circle cx="50" cy="10" r="2" fill="#6366F1" />
        <circle cx="70" cy="10" r="2" fill="#6366F1" />
        <circle cx="10" cy="30" r="2" fill="#6366F1" />
        <circle cx="10" cy="50" r="2" fill="#6366F1" />
        <circle cx="10" cy="70" r="2" fill="#6366F1" />
        <circle cx="30" cy="30" r="2" fill="#6366F1" />
        <circle cx="50" cy="50" r="2" fill="#6366F1" />
        <circle cx="70" cy="70" r="2" fill="#6366F1" />
        <line x1="10" y1="10" x2="70" y2="10" stroke="#6366F1" strokeWidth="0.5" />
        <line x1="10" y1="10" x2="10" y2="70" stroke="#6366F1" strokeWidth="0.5" />
        <line x1="70" y1="10" x2="70" y2="70" stroke="#6366F1" strokeWidth="0.5" />
        <line x1="10" y1="70" x2="70" y2="70" stroke="#6366F1" strokeWidth="0.5" />
        <line x1="30" y1="10" x2="30" y2="30" stroke="#6366F1" strokeWidth="0.5" />
        <line x1="50" y1="10" x2="50" y2="50" stroke="#6366F1" strokeWidth="0.5" />
        <line x1="10" y1="30" x2="30" y2="30" stroke="#6366F1" strokeWidth="0.5" />
        <line x1="10" y1="50" x2="50" y2="50" stroke="#6366F1" strokeWidth="0.5" />
      </svg>
    </div>
  );
};

export default CircuitPattern;
