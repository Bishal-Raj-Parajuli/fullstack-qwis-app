import Logo from '../assets/logo-text.png';

export default function Navbar() {
  return (
    <nav className='py-2 px-5 border-b-4 border-secondary shadow-lg'>
        <img width={150} src={Logo} alt='logo' />
    </nav>
  )
}
