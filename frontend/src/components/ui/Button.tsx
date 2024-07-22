interface Props{
    theme: 'primary' | 'secondary'
    title: string
    clickAction?: () => void
   
}
export default function Button({theme, title, clickAction}: Props){

  return (
    <>
    <button 
    className={`
            ${theme === 'primary'
                ? 'bg-primary text-dark' 
                : 'bg-secondary text-dark'} 
            min-w-[150px] px-4 py-2 m-2 rounded-2xl font-medium
        `}
    onClick={clickAction}
    >
        {title}
    </button>
    </>
  )
}
