import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  shadow?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'full';
  bordered?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  shadow = true,
  rounded = 'md',
  bordered = false,
  padding = 'md',
  onClick,
}) => {
  const roundedMap = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-xl',
  };

  const paddingMap = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7',
  };
  
  const baseStyles = `
    bg-white 
    transition-all 
    duration-300
    ${roundedMap[rounded]} 
    ${paddingMap[padding]} 
    ${shadow ? 'shadow-card' : ''} 
    ${bordered ? 'border border-gray-200' : ''} 
    ${hoverable ? 'hover:shadow-card-hover transform hover:-translate-y-1' : ''} 
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `;

  return (
    <div className={baseStyles} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;