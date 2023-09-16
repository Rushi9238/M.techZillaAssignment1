import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {BsEyeFill ,BsEyeSlashFill} from 'react-icons/bs'

import { auth, provider } from '../const/config'
import {signInWithPopup} from 'firebase/auth'
import { Route, Routes } from 'react-router-dom'
import Counter from './Counter'
// import HomePage from '../HomePage2/HomePage'

const Login = ({setTimerModalOpen,timerModalopen,username,setusername,userUrl,setUserUrl}) => {

const [visibleEye,setVisibleEye]=useState(false)
const [value,setvalue] =useState('')
    const handelAuth=()=>{
        // const formData=new FormData()
        signInWithPopup(auth,provider).then((data)=>{
            setvalue(data.user.email)
            setusername(data.user.displayName)
            setUserUrl(data.user.photoURL)
            setTimerModalOpen(true)
            // formData.append('name',data.user.email)
            // console.log(data);
            localStorage.setItem('userName',data.user.displayName)
            // localStorage.setItem('userURL',data.user.photoURL)

        })
    }
    const handelPasswordHide=()=>{
        setVisibleEye(!visibleEye)
    }
  return (
    <>
    {
        value ? 
        <Routes>
            <Route path='/' element={
            <Counter
            setTimerModalOpen={setTimerModalOpen}
            timerModalopen={timerModalopen}
            username={username}
            setusername={setusername}
            userUrl={userUrl}
          setUserUrl={setUserUrl}
                value={value}
                setvalue={setvalue}
            />}/>
        </Routes>
        // (<Counter/>)
        
        :
        <div className="login-page">
        <div className="container">
           <div className="wrrap-div">
           <div className="login">
                <div className="log-head">
                    
                    <div className="heading">
                    LOG IN
                    </div>
                </div>
                <div className="log-main">
                    <div className="username">
                        <input type="text" placeholder='User Name*' />

                    </div>
                    <div className="password">
                        <input 
                        type={visibleEye?'text' :'password'} 
                        placeholder='Password*'
                        />
                        <button onClick={handelPasswordHide}>
                            {
                                visibleEye? <BsEyeFill/> :<BsEyeSlashFill/>
                            }
                        </button>
                    </div>
                    <div className="log-btn-div">
                        <button>LOG IN</button>
                        <div className="checkBox">
                        <input type="checkbox" name="" id="" /> <label>Remember me</label>
                        </div>
                    </div>
                    <div className="forGotPass">
                        Forgot Password?
                    </div>
                </div>
                <div className="log-btn">
                    <div className="no-acc">
                        Don't have an Account?
                    </div>
                        <div className="googleSign" onClick={()=>handelAuth()}>
                            <FcGoogle className='googleIcon'/> Sign up With Google
                        </div>
                        <div className="divider">
                            or
                        </div>
                        <div className="crt-acc">
                            <button>Create Account</button>
                        </div>
                </div>
            </div>
           </div>
        </div>
    </div>
    }
    </>    
  )
}

export default Login