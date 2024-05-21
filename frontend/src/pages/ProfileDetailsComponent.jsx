import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Container, Card } from 'react-bootstrap';
import axios from 'axios';

const ProfileDetailsComponent = ({ user, role, isEditing, setIsEditing, setUser }) => {
    const [formData, setFormData] = useState({ ...user });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            console.log(formData)
            const res = await axios.put('http://localhost:3000/accounts/updateUser', formData, { withCredentials: true });
            setUser(res.data.user);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating user data:', error);
            if (error.response && error.response.data) {
                alert(`Error: ${error.response.data.message}`);
            } else {
                alert('An error occurred while updating the profile.');
            }
        }
    };

    return (
        <Card className='p-5'>
            <Card.Body>
                <Container>
                    <Row>
                        <Col md={3} className="text-center">
                            <img
                                src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"
                                alt="User Icon"
                                className="img-fluid rounded-circle mb-2"
                                style={{ width: '150px', height: '150px' }}
                            />
                            <h5>{user.username}</h5>
                        </Col>
                        <Col md={1}>
                            <div className="vr"></div>
                        </Col>
                        <Col md={8}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Username</Form.Label>
                                        {isEditing ? (
                                            <Form.Control
                                                type="text"
                                                name="username"
                                                value={formData.username || user.username}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            <p>{user.username}</p>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>CNIC</Form.Label>
                                        {isEditing ? (
                                            <Form.Control
                                                type="text"
                                                name="cnic"
                                                value={formData.cnic || user.cnic}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            <p>{user.cnic}</p>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        {isEditing ? (
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            <p>{user.email}</p>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Phone</Form.Label>
                                        {isEditing ? (
                                            <Form.Control
                                                type="text"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            <p>{user.phone}</p>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                <Form.Group>
                                        <Form.Label>City</Form.Label>
                                        {isEditing ? (
                                            <Form.Control
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            <p>{user.city}</p>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                <Form.Group>
                                        <Form.Label>Country</Form.Label>
                                        {isEditing ? (
                                            <Form.Control
                                                type="text"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            <p>{user.country}</p>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                {role === 'dealer' && (
                                    <>
                                        <Col md={6}>
                                        <Form.Group>
                                                <Form.Label>Dealership Registeration</Form.Label>
                                                {isEditing ? (
                                                    <Form.Control
                                                        type="text"
                                                        name="registration"
                                                        value={formData.registration}
                                                        onChange={handleChange}
                                                    />
                                                ) : (
                                                    <p>{user.registration}</p>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                        <Form.Group>
                                                <Form.Label>Facebook: </Form.Label>
                                                {isEditing ? (
                                                    <Form.Control
                                                        type="text"
                                                        name="facebook"
                                                        value={formData.facebook}
                                                        onChange={handleChange}
                                                    />
                                                ) : (
                                                    <p>{user.facebook}</p>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                        <Form.Group>
                                                <Form.Label>Instagram: </Form.Label>
                                                {isEditing ? (
                                                    <Form.Control
                                                        type="text"
                                                        name="instagram"
                                                        value={formData.instagram}
                                                        onChange={handleChange}
                                                    />
                                                ) : (
                                                    <p>{user.instagram}</p>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                        <Form.Group>
                                                <Form.Label>Latitude </Form.Label>
                                                {isEditing ? (
                                                    <Form.Control
                                                        type="number"
                                                        name="lat"
                                                        value={formData.lat}
                                                        onChange={handleChange}
                                                    />
                                                ) : (
                                                    <p>{user.lat}</p>
                                                )}
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                        <Form.Group>
                                                <Form.Label>Longitude </Form.Label>
                                                {isEditing ? (
                                                    <Form.Control
                                                        type="number"
                                                        name="lng"
                                                        value={formData.lng}
                                                        onChange={handleChange}
                                                    />
                                                ) : (
                                                    <p>{user.lng}</p>
                                                )}
                                            </Form.Group>
                                        </Col>
                                    </>
                                )}
                            </Row>
                        </Col>
                    </Row>
                    {isEditing && (
                        <Row className="mt-4">
                            <Col className="text-center">
                                <Button onClick={handleSave}>Save</Button>
                                <Button variant="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
                            </Col>
                        </Row>
                    )}
                </Container>
            </Card.Body>
        </Card>
    );
};

export default ProfileDetailsComponent;
