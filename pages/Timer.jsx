import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
const Timer = ({ username, setusername, userUrl, setUserUrl,isBreak,setIsBreak,setTimerModalOpen,timerModalopen ,breakModalOpen,setBreakModalOpen }) => {

    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval;

        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
           
            setTimerModalOpen(false)
            setBreakModalOpen(true)
        }

        return () => clearInterval(interval);
    }, [isActive, time,breakModalOpen,timerModalopen]);

    const handleStartPause = () => {
        setIsActive(false);
    };
    const handleStart = () => {
        setIsActive(true);
    };
    const handleReset = () => {
        setIsActive(false);
        setTime(25 * 60);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <>
            <div className="timerDiv">
                <div className="headDiv">
                    <div className="userUrl">
                        <img className='img-fliud' src={userUrl} alt="" />
                    </div>
                    <div className="userName">{username}</div>

                </div>
                <div className="counterDiv">
                    <div className='timer'>{formatTime(time)}</div>
                </div>

                <div className="timerButton">
                {
                    isActive ? <Button variant="outline-secondary" size="lg"  onClick={handleStartPause}>Pause</Button>
                    :
                    <Button variant="outline-secondary" size="lg" disabled>Pause</Button>
                }
                {
                    isActive? <Button variant="outline-success" disabled size="lg">Start</Button>
                    :
                    <Button variant="outline-success"  onClick={handleStart}  size="lg">Start</Button>
                }
                <Button variant="outline-danger" onClick={handleReset} size="lg">Reset</Button>
                </div>

            </div>
        </>
    )
}

export default Timer