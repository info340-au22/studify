import React, { useState } from 'react';
import { Button, Modal, Container } from 'react-bootstrap';

import AddCourseForm from './AddCourseForm';

export default function AddCourseModal(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className='add-button'>
            <Button size='sm' variant='info' onClick={() => setModalShow(true)}>
                <small className='fa-solid fa-plus'></small>
                <span className='d-none d-lg-inline'> Add</span>
            </Button>

            <Modal 
                show={modalShow} 
                onHide={() => setModalShow(false)} 
                backdrop='static' 
                keyboard={false} 
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Course</Modal.Title>
                </Modal.Header>
                <Modal.Body className='show-grid'>
                    <Container>
                        <AddCourseForm
                            weekdayStrings={props.weekdayStrings}
                            handleNewCourseChangeCallback={props.handleNewCourseChangeCallback}
                            addNewCourseCallback={props.addNewCourseCallback}
                        />
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={() => setModalShow(false)}>
                        Cancel
                    </Button>
                    <Button variant='primary' type='submit' form='newCourseForm'>
                        Save Course
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}