import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export default function AddCourseForm(props) {
    const [validated, setValidated] = useState(false);

    const handleNewCourseChangeCallback = props.handleNewCourseChangeCallback;
    const addNewCourseCallback = props.addNewCourseCallback;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            addNewCourseCallback();
        } else {
            event.stopPropagation();
        }
        setValidated(true);
    };

    const weekdayOptions = props.weekdayStrings.map((weekdayStr) => {
        return (
            <option key={weekdayStr} value={weekdayStr}>
                {weekdayStr.charAt(0).toUpperCase() + weekdayStr.slice(1)}
            </option>
        )
    })

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} id='newCourseForm'>
            <Row>
                <Col sm={12} lg={6}>
                    <Form.Group className='mb-3' controlId='controlSubjectInput'>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control required type='text' autoFocus onChange={handleNewCourseChangeCallback} />
                        <Form.Control.Feedback type='invalid'>Please provide a subject.</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col sm={12} lg={6}>
                    <Form.Group className='mb-3' controlId='controlDateInput'>
                        <Form.Label>Date</Form.Label>
                        <Form.Select required onChange={handleNewCourseChangeCallback}>
                            <option value=''></option>
                            {weekdayOptions}
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>Please provide a date.</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={12} lg={6}>
                    <Form.Group className='mb-3' controlId='controlStartTimeInput'>
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control required type='time' min='08:00' max='20:00' step='1800' onChange={handleNewCourseChangeCallback} />
                        <Form.Control.Feedback type='invalid'>Please provide a valid time.</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col sm={12} lg={6}>
                    <Form.Group className='mb-3' controlId='controlEndTimeInput'>
                        <Form.Label>End Time</Form.Label>
                        <Form.Control required type='time' min='08:30' max='20:30' step='1800' onChange={handleNewCourseChangeCallback} />
                        <Form.Control.Feedback type='invalid'>Please provide a valid time.</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <small className='text-muted'>Please only provide a 30-min time interval.</small>
            </Row>
        </Form>
    )
}