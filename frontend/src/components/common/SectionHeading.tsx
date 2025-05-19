import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
  light = false,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold font-montserrat mb-4 ${light ? 'text-white' : 'text-gray-900 dark:text-white'
          }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
  className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
    light ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'
  }`}
>
  {subtitle}
</p>
      )}
      <div className={`h-1 w-24 rounded-full mt-4 ${centered ? 'mx-auto' : ''} bg-yellow-500`}></div>
    </div>
  );
};

export default SectionHeading;