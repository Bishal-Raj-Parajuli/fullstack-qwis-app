import Logo from '../../assets/logo-text.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='py-2 px-8 w-full bg-background top-0 flex justify-between items-center border-b-2 border-accent shadow-xl fixed '>
        <Link to={'/'}><img width={100} src={Logo} alt='logo' /></Link> 
        <span className="h-10 w-10 rounded-full bg-accent text-white flex items-center justify-center">
          <FontAwesomeIcon icon={faUser} />
        </span>
    </nav>
  )
}
