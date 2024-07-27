import { useEffect, useState } from 'react'
import Button from '../ui/Button'
// import { useQwisStatus } from '../../stores/QwisScore';

export default function Timer() {
    const [time, setTime] = useState(10);

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
    <Button theme='secondary' title={`Time: ${formatTime(time)}`} />
  )
}
