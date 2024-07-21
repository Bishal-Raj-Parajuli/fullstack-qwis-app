import Logo from '../../assets/logo-text.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';

interface Props {
  timer?: boolean;
}


export default function Navbar({timer}: Props) {

  const [time, setTime] = useState(2 * 60);

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <nav className='py-2 px-8 w-full bg-background top-0 flex justify-between items-center border-b-2 border-accent shadow-xl fixed '>
        <Link to={'/'}><img width={100} src={Logo} alt='logo' /></Link> 
        
        {
          timer ? (
              <Button theme='secondary' title={`Time: ${formatTime(time)}`} />
          ) : (
            <span className="h-10 w-10 rounded-full bg-accent text-white flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} />
            </span>
          )

        }
        
        
    </nav>
  )
}
