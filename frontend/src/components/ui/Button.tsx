interface Props{
    theme: 'primary' | 'secondary'
    title: string
   
}
export default function Button({theme, title}: Props){

  return (
    <>
    <button className={`
            ${theme === 'primary'
                ? 'bg-primary text-dark' 
                : 'bg-secondary text-dark'} 
            min-w-[150px] px-4 py-2 m-2 rounded-2xl font-medium
        `}>
        {title}
    </button>
    </>
  )
}
