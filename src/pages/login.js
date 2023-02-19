import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaUser } from 'react-icons/fa';
import { RiShieldKeyholeFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()

    const onRegister = () => {
        navigate('/register')
    }

    const onLogin = () => {
        navigate('/dashboard')
    }
    return (
        <>
            <div className='d-flex h-full  justify-content-center align-items-center' >
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
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
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