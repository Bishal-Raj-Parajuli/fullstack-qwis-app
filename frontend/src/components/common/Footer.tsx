export default function Footer() {

    const date = new Date();

  return (
    <footer className="w-full py-2 border-t-2 border-accent bg-background flex justify-center items-center">
       {date.getFullYear()} &copy; Qwis 
    </footer>
  )
}
