import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const email = localStorage.getItem("data")
        setEmail(email)
    }, [])
    return (
        <>
            <div className="d-flex h-full justify-content-center align-items-center">
                <Card>
                    <Card.Body>
                        <div>
                            Selamat Datang
                        </div>

                        <div className='mt-3'>
                            Email : {email}
                        </div>
                        <div className='mt-3 d-flex justify-content-center'>
                            <div className='bg-button' style={{ cursor: 'pointer' }} onClick={handleShow}>Ubah Password</div>
                        </div>
                    </Card.Body>
                </Card>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ubah Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Control
                            placeholder="Masukan Password yang baru"
                            aria-label="Password"
                            type='password'
                            aria-describedby="basic-addon1"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default Dashboard