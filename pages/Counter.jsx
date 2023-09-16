import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Timer from './Timer';
import BreakTime from './BreakTime';
const Counter = ({ setTimerModalOpen, timerModalopen, username, setusername, userUrl, setUserUrl, value, setvalue }) => {
  const [breakModalOpen, setBreakModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 1000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
        setTimerModalOpen(false)
        setvalue('')
      });
    }
  }, [isLoading]);
  const handleClick = () => {
    setLoading(true)

  };



  return (
    <>
      <div className="wrapper">
        <Modal
          show={timerModalopen}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="static"
          keyboard={false}
        >
          <div className="custoModalTimer">
            <Modal.Body>
              <Timer
                username={username}
                setusername={setusername}
                userUrl={userUrl}
                setUserUrl={setUserUrl}

                setTimerModalOpen={setTimerModalOpen}
                timerModalopen={timerModalopen}
                setBreakModalOpen={setBreakModalOpen}
                breakModalOpen={breakModalOpen}
              />

            </Modal.Body>
            <Modal.Footer>
              <Button variant="warning" disabled={isLoading} onClick={!isLoading ? handleClick : null}>{isLoading ? 'Loading…' : 'Logout'}</Button>
            </Modal.Footer>
          </div>
        </Modal>

        <Modal
          show={breakModalOpen}

          backdrop="static"
          keyboard={false}
        >
         <div className="coustomModalBreak">
         <Modal.Header >
            <Modal.Title>Break Time</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BreakTime
              timerModalopen={timerModalopen}
              setTimerModalOpen={setTimerModalOpen}
              setBreakModalOpen={setBreakModalOpen}
              breakModalOpen={breakModalOpen}
            />
          </Modal.Body>
         </div>

        </Modal>
      </div>

    </>
  )
}

export default Counter