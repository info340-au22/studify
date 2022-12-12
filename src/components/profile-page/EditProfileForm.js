import React, {useState} from 'react';
import { Form, Row, Col, Button, Modal, Container } from 'react-bootstrap';

function EditProfileForm(props) {
    const [validated, setValidated] = useState(false);

    const handleEditProfileCallback = props.handleEditProfileCallback;
    const editProfileCallback = props.editProfileCallback;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        editProfileCallback();
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} id='editProfileForm'>
            <Row>
                <Col>
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type='text' autoFocus onChange={handleEditProfileCallback} />
                    <Form.Control.Feedback type='invalid'>Please provide a name.</Form.Control.Feedback>
                </Col>
                <Col>
                    <Form.Label>Username</Form.Label>
                    <Form.Control required type='text' autoFocus onChange={handleEditProfileCallback} />
                    <Form.Control.Feedback type='invalid'>Please provide a username.</Form.Control.Feedback>
                </Col>
                <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type='text' autoFocus onChange={handleEditProfileCallback} />
                    <Form.Control.Feedback type='invalid'>Please provide an email.</Form.Control.Feedback>
                </Col>
                <Col>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control required type='text' autoFocus onChange={handleEditProfileCallback} />
                    <Form.Control.Feedback type='invalid'>Please provide a phone number.</Form.Control.Feedback>
                </Col>
                <Col>
                    <Form.Label>School</Form.Label>
                    <Form.Control required type='text' autoFocus onChange={handleEditProfileCallback} />
                    <Form.Control.Feedback type='invalid'>Please provide a school name.</Form.Control.Feedback>
                </Col>
            </Row>
        </Form>
    );
}

//Modal for Edit Profile
export default function EditProfileModal(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className='add-button'>
            <Button size='sm' variant='info' onClick={() => setModalShow(true)}>
                <small className='fa-solid fa-plus'></small>
                <span className='d-none d-lg-inline'> Save</span>
            </Button>

            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                backdrop='static'
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body className='show-grid'>
                    <Container>
                        <EditProfileForm 
                            handleEditProfileCallback={props.handleEditProfileCallback}
                            editProfileCallback={props.editProfileCallback}
                        />
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={() => setModalShow(false)}>
                        Cancel
                    </Button>
                    <Button variant='primary' type='submit' fomr='editProfileFomr'>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}