import React, { useState } from 'react';
import { Button, Modal, Tabs, Tab, Form, Row, Col } from 'react-bootstrap';
import { getDatabase, ref as databaseRef, set as firebaseSet } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from 'firebase/auth';

export default function ProfileEditForm(props) {
    const currentUserDetails = props.currentUserDetails;
    const currentUser = props.currentUser;

    const [modalShow, setModalShow] = useState(false);
    const [currentUserInfo, setCurrentUserInfo] = useState(currentUserDetails);
    const [imageFile, setImageFile] = useState(undefined);

    const handleChange = (event) => {
        for (const key in currentUserInfo) {
            if (key === event.target.id) {
                currentUserInfo[key] = event.target.value;
            }  
        }
    }

    const handleImageFileChange = (event) => {
        if (event.target.files.length > 0 && event.target.files[0]) {
            const imageFile = event.target.files[0];
            setImageFile(imageFile);
            console.log(imageFile)
        }
    }

    const handleImageUpload = async (event) => {
        const storage = getStorage();
        const userImageRef = storageRef(storage, 'userImages/' + currentUser.id + '.png');

        await uploadBytes(userImageRef, imageFile);
        const downloadUrlString = await getDownloadURL(userImageRef);
        await updateProfile(currentUser, { photoURL: downloadUrlString})

        const userImageDbRef = databaseRef(getDatabase(), 'userData/' + currentUser.id + '/userDetails/image');
        firebaseSet(userImageDbRef, downloadUrlString)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const db = getDatabase();
        const userDetailsRef = databaseRef(db, 'userData/' + currentUser.id + '/userDetails')

        firebaseSet(userDetailsRef, currentUserInfo)
        setCurrentUserInfo(currentUserInfo)
    }

    return (
        <div className='col-sm-12 text-center'>
            <Button size='sm' variant='info' onClick={() => setModalShow(true)}>
                <span>Edit</span>
            </Button>

            <Modal 
                show={modalShow} 
                onHide={() => setModalShow(false)} 
                backdrop='static' 
                keyboard={false} 
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Personal Information</Modal.Title>
                </Modal.Header>
                <Modal.Body className='show-grid'>
                    <div className='text-center mb-3'>
                        <h4 className='pt-sm-2 pb-1 mb-0 text-nowrap'>{currentUserDetails.name}</h4>
                        <div className='text-muted'><small>{currentUserDetails.email}</small></div>
                        <div className='mt-2'>
                            <input className='d-none' id='imageUploadInput' type='file' onChange={handleImageFileChange}></input>
                            <label className='btn btn-primary' htmlFor='imageUploadInput' type='button' onClick={handleImageUpload}>
                                <span className='fa-solid fa-camera'></span>
                                <span> Change Photo</span>
                            </label>
                        </div>
                    </div>
                    <Form id='userDetails' onSubmit={handleSubmit}>
                        <Tabs justify defaultActiveKey='personal-info' className='mb-3'>
                            <Tab eventKey='personal-info' title='Personal Info'>
                                    <Form.Group as={Row} className='mb-3' controlId='name'>
                                        <Form.Label column sm='2'>Name:</Form.Label>
                                        <Col sm='10'>
                                            <Form.Control type='text' placeholder='Full Name' onChange={handleChange} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-3' controlId='phone'>
                                        <Form.Label column sm='2'>Phone:</Form.Label>
                                        <Col sm='10'>
                                            <Form.Control type='tel' placeholder='123-456-7689' onChange={handleChange} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-3' controlId='school'>
                                        <Form.Label column sm='2'>School:</Form.Label>
                                        <Col sm='10'>
                                            <Form.Control type='text' placeholder='University of Washington' onChange={handleChange} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-3' controlId='job'>
                                        <Form.Label column sm='2'>Job:</Form.Label>
                                        <Col sm='10'>
                                            <Form.Control type='text' placeholder='Front-End Development' onChange={handleChange} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-3' controlId='location'>
                                        <Form.Label column sm='2'>Location:</Form.Label>
                                        <Col sm='10'>
                                            <Form.Control type='text' placeholder='Seattle, WA' onChange={handleChange} />
                                        </Col>
                                    </Form.Group>
                            </Tab>
                            <Tab eventKey='social-media' title='Social Media'>
                                <Form.Group as={Row} className='mb-3' controlId='facebook'>
                                    <Form.Label column sm='2'>Facebook:</Form.Label>
                                    <Col sm='10'>
                                        <Form.Control type='url' placeholder='facebook.com' onChange={handleChange} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className='mb-3' controlId='twitter'>
                                    <Form.Label column sm='2'>Twitter:</Form.Label>
                                    <Col sm='10'>
                                        <Form.Control type='url' placeholder='twitter.com' onChange={handleChange} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className='mb-3' controlId='instagram'>
                                    <Form.Label column sm='2'>Instagram:</Form.Label>
                                    <Col sm='10'>
                                        <Form.Control type='url' placeholder='instagram.com' onChange={handleChange} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className='mb-3' controlId='linkedin'>
                                    <Form.Label column sm='2'>LinkedIn:</Form.Label>
                                    <Col sm='10'>
                                        <Form.Control type='url' placeholder='linkedin.com' onChange={handleChange} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className='mb-3' controlId='github'>
                                    <Form.Label column sm='2'>GitHub:</Form.Label>
                                    <Col sm='10'>
                                        <Form.Control type='url' placeholder='github.com' onChange={handleChange} />
                                    </Col>
                                </Form.Group>
                            </Tab>
                        </Tabs>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={() => setModalShow(false)}>
                        Cancel
                    </Button>
                    <Button variant='primary' type='submit' form='userDetails' onClick={() => setModalShow(false)}>
                        Save Profile
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}