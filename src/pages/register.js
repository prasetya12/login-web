import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { RiShieldKeyholeFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import app from '../config/firebase'
import { auth } from '../config/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2'

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [error, setError] = useState('');
    // const auth = getAuth();

    const navigate = useNavigate()

    const onLogin = () => {
        navigate('/')
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleRePasswordChange = (e) => {
        setRepassword(e.target.value)
    }

    const validatePassword = () => {

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@_#$!%*?&])[A-Za-z\d@_#$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const onSubmit = async () => {
        setError('')
        const valid = validatePassword();
        if (valid) {
            if (password === repassword) {
                console.log(auth, 'halo')
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        if (user) {
                            Swal.fire(
                                'Success',
                                'User has been Created',
                                'success'
                            ).then((res) => {
                                if (res.isConfirmed) {
                                    navigate('/')
                                }
                            })
                        }
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ..
                    });

            } else {
                setError('Password yang dimasukan tidak sesuai')

            }
        } else {
            setError('Password must contain Uppercase,Lowercase, Number, and Symbol')
        }
        console.log(valid, 'valid')
    }

    return (
        <>
            <div className='d-flex h-full flex-column  justify-content-center align-items-center' >
                {error && error.length > 0 ? (<Alert key={'danger'} variant={'danger'}>
                    {error}
                </Alert>) : (<></>)}
                <div className='bg-grad border border-primary p-3 ' style={{ width: '400px', borderRadius: '16px' }}>
                    <div className='d-flex justify-content-center'>
                        <div className='bg-avatar'>
                            <img className='img-user' src='/assets/user.png' />
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        Register
                    </div>
                    <div className='mt-3'>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                                <FaEnvelope />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="Email"
                                aria-label="Email"
                                type='email'
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </InputGroup>
                    </div>
                    <div className='mt-3'>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                                <FaUser />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                        </InputGroup>
                    </div>
                    <div className='mt-4'>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                                <RiShieldKeyholeFill />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="Password"
                                aria-label="Password"
                                aria-describedby="basic-addon2"
                                type='password'
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </InputGroup>
                    </div>
                    <div className='mt-4'>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                                <RiShieldKeyholeFill />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="Retype Password"
                                aria-label="Password"
                                aria-describedby="basic-addon2"
                                type='password'
                                value={repassword}
                                onChange={handleRePasswordChange}
                            />
                        </InputGroup>
                    </div>

                    <div className='mt-5 d-flex justify-content-center'>
                        <div className='bg-button' style={{ cursor: 'pointer' }} onClick={onSubmit} >REGISTER</div>
                    </div>
                    <div className='d-flex justify-content-center mt-2' style={{ fontSize: '12px' }}>
                        You already have account ? <div className='ms-1' onClick={onLogin} style={{ cursor: 'pointer' }}>Login</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register