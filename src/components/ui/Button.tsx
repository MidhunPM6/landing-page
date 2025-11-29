import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'dark' | 'light'
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'dark', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'px-10 py-4 rounded-[14px] font-medium transition-colors duration-200'
  
  const variantStyles = {
    dark: 'bg-[#191A23] text-white hover:bg-[#252732]',
    light: 'bg-white text-[#191A23] hover:bg-gray-100 border border-[#191A23]'
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button