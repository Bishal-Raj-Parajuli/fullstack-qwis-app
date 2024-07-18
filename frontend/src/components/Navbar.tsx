import Logo from '../assets/logo-text.png';

export default function Navbar() {
  return (
    <nav className='py-2 px-5 w-full border-b-4 border-secondary shadow-lg fixed bg-white'>
        <img width={120} src={Logo} alt='logo' />
    </nav>
  )
}
