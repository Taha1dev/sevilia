import React from 'react';

interface NumberedCardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

const NumberedCard: React.FC<NumberedCardProps> = ({
  number,
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`flex gap-4 p-6 rounded-2xl border border-border ${className}`}>
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-main/20 text-main font-bold text-lg">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NumberedCard;