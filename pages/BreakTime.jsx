import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

const BreakTime = ({ timerModalopen, setTimerModalOpen,breakModalOpen,setBreakModalOpen }) => {
    const [time, setTime] = useState(5 * 60);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {

        let interval;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setBreakModalOpen(false)
            setTimerModalOpen(true)
        }

        return () => clearInterval(interval);
    }, [isActive, time, timerModalopen,breakModalOpen]);

    const handleStartPause = () => {
        setIsActive(false);
    };
    const handleStart = () => {
        setIsActive(true);
    };
    const handleReset = () => {
        setBreakModalOpen(false)
        setTimerModalOpen(true)
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <>
            <div className="breakTimeDiv">
                <div className="timeCount">
                    <div className='timer'>{formatTime(time)}</div>
                </div>
                <div className="breakButton">
                    {
                        isActive ? <Button variant="outline-secondary"  onClick={handleStartPause}>Pause</Button>
                            :
                            <Button variant="outline-secondary"  disabled>Pause</Button>
                    }
                     {
                    isActive? <Button variant="outline-success" disabled >Start</Button>
                    :
                    <Button variant="outline-success"  onClick={handleStart}  >Start</Button>
                }
                    <Button variant="outline-danger" onClick={handleReset} >Finish Break Time</Button>
                </div>
            </div>
        </>
    )
}

export default BreakTime