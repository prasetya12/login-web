import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaUser } from 'react-icons/fa';
import { RiShieldKeyholeFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import { auth } from '../config/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const onRegister = () => {
        navigate('/register')
    }

    const onLogin = async () => {
        setError('')
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            localStorage.setItem("data", user.user.email)
            navigate('/dashboard')

        } catch (error) {
            setError('Username and Password Wrong')
        }

    }
    return (
        <>
            <div className='d-flex h-full flex-column justify-content-center align-items-center' >
                {error && error.length > 0 ? (<Alert key={'danger'} variant={'danger'}>
                    {error}
                </Alert>) : (<></>)}
                <div className='bg-grad border border-primary p-3 ' style={{ width: '400px', borderRadius: '16px' }}>
                    <div className='d-flex justify-content-center'>
                        <div className='bg-avatar'>
                            <img className='img-user' src='/assets/user.png' />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                                <FaUser />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                value={email}
                                onChange={handleEmail}
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
                                type='password'
                                aria-describedby="basic-addon2"
                                value={password}
                                onChange={handlePassword}
                            />
                        </InputGroup>
                    </div>
                    <div className='d-flex justify-content-between ' style={{ fontSize: '12px' }}>
                        <div >
                            <Form.Check
                                type='checkbox'
                                id={`default-checkbox`}
                                label={`Remember me`}
                            />

                        </div>
                        <div className='fst-italic'>
                            Forgot Password ?
                        </div>
                    </div>
                    <div className='mt-2 d-flex justify-content-center'>
                        <div className='bg-button' style={{ cursor: 'pointer' }} onClick={onLogin}>LOGIN</div>
                    </div>
                    <div className='d-flex justify-content-center mt-2' style={{ fontSize: '12px' }}>
                        Don't have an account ? <div className='ms-1' onClick={onRegister} style={{ cursor: 'pointer' }}>Register</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login