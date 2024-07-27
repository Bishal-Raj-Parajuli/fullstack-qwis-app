import Logo from '../../assets/logo-text.png';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Timer from '../quizpage/Timer';

interface Props {
  timer?: boolean;
}


export default function Navbar({timer}: Props) {

  
  return (
    <nav className='py-2 px-8 w-full bg-background top-0 flex justify-between items-center border-b-2 border-accent shadow-xl fixed '>
        <Link to={'/'}><img width={100} src={Logo} alt='logo' /></Link> 
        
        {
          timer ? (
              <Timer />
          ) : (
            <span className="h-10 w-10 rounded-full bg-accent text-white flex items-center justify-center">
              <FaUser />
            </span>
          )

        }
        
        
    </nav>
  )
}
