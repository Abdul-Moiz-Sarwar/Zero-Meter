import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const USER_ICON_URL = 'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png';

const UserDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state?.user;

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/accounts/user/${user._id}`, { withCredentials: true });
            navigate('/user-list'); 
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    if (!user) {
        return <div>No user data available.</div>;
    }

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Card className='p-5' style={{ maxWidth: '800px', width: '100%' }}>
                <Card.Body>
                    <div className="text-center mb-4">
                        <img
                            src={USER_ICON_URL}
                            alt="User Icon"
                            className="img-fluid rounded-circle mb-2"
                            style={{ width: '150px', height: '150px' }}
                        />
                    </div>
                    <Row className="text-center mb-3">
                        <Col md={6}>
                            <strong>Username: </strong>
                            <span>{user.username}</span>
                        </Col>
                        <Col md={6}>
                            <strong>CNIC: </strong>
                            <span>{user.cnic}</span>
                        </Col>
                    </Row>
                    <Row className="text-center mb-3">
                        <Col md={6}>
                            <strong>Email: </strong>
                            <span>{user.email}</span>
                        </Col>
                        <Col md={6}>
                            <strong>Phone: </strong>
                            <span>{user.phone}</span>
                        </Col>
                    </Row>
                    <Row className="text-center mb-3">
                        <Col md={6}>
                            <strong>City: </strong>
                            <span>{user.city}</span>
                        </Col>
                        <Col md={6}>
                            <strong>Country: </strong>
                            <span>{user.country}</span>
                        </Col>
                    </Row>
                    <div className="text-center mt-4">
                        <Button variant="danger" onClick={handleDelete}>Delete User</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default UserDetails;
