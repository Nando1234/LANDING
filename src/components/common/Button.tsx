import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'yellow' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: boolean;
  className?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  rounded = false,
  className = '',
  to,
  href,
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  icon,
  iconPosition = 'left',
}) => {
  // Base styles
  const baseStyles = 'font-medium inline-flex items-center justify-center transition-all duration-300 focus:outline-none';
  
  // Size styles
  const sizeStyles = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary-600 dark:bg-yellow-600 hover:bg-primary-700 dark:hover:bg-yellow-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-primary-600 dark:bg-yellow-600 hover:bg-primary-700 dark:hover:bg-yellow-700 text-white shadow-md hover:shadow-lg',
    yellow: 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-current text-primary-600 dark:text-yellow-500 hover:bg-primary-50 dark:hover:bg-white-100',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 text-primary-600 dark:text-yellow-500',
  };
  
  // Rounded styles
  const roundedStyle = rounded ? 'rounded-full' : 'rounded-md';
  
  // Disabled styles
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';
  
  // Combine all styles
  const styles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${roundedStyle} ${disabledStyles} ${widthStyles} ${className}`;
  
  // Content with icon
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  // Render link or button based on props
  if (to) {
    return (
      <Link to={to} className={styles}>
        {content}
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  } else {
    return (
      <button
        type={type}
        className={styles}
        onClick={onClick}
        disabled={disabled}
      >
        {content}
      </button>
    );
  }
};

export default Button;