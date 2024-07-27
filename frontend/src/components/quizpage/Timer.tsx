import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import { useQwisStatus } from '../../stores/QwisScore';

export default function Timer() {
    const [time, setTime] = useState(2 * 60);
    const { timerStatus , setDefaultTimerStatus, changeTimerStatus } = useQwisStatus();

    useEffect(() => {
        setDefaultTimerStatus();
    },[])

    useEffect(() => {
        if (time > 0) {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(interval);
        }else{
            if(timerStatus){
                changeTimerStatus();
            }
        }
    }, [time]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };


  return (
    <Button theme='secondary'>{`Time: ${formatTime(time)}`}</Button>
  )
}
