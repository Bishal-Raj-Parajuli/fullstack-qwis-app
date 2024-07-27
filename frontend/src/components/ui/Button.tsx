import React from "react"

interface Props{
    theme?: 'primary' | 'secondary'
    children: React.ReactNode
    onClick?: () => void
   
}
export default function Button({theme='primary', onClick, children}: Props){

  return (
    <>
    <button 
    className={`
            ${theme === 'primary'
                ? 'bg-primary text-dark' 
                : 'bg-secondary text-dark'} 
            min-w-[150px] px-4 py-2 m-2 rounded-2xl font-medium
            flex justify-center items-center
        `}
    onClick={onClick}
    >
        {children}
    </button>
    </>
  )
}
