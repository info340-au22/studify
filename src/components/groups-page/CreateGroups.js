import React, { useState } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';

//function to enter group name, group description, public/private choice and picture create.
export default function CreateGroupsForm(props) {
    const [isValid, setIsValid] = useState(false);

    const handleNewGroupChangeCallBack = props.handleNewGroupChangeCallBack;
    const addNewGroupCallBack = props.addNewGroupCallBack;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setIsValid(true);

        addNewGroupCallBack();
    }

    return (
        <div className="create-group-form">
            <h1>Create new Group</h1>
            <Form noValidate validated={isValid} onSubmit={handleSubmit} id='newGroupForm'>
                <Row>
                    <Col sm={12} lg={6}>
                        <Form.Group className='mb-4' controlId='controlGroupNameInput'>
                            <Form.Label>Group name</Form.Label>
                            <Form.Control className='group-textbox' require type='text' autoFocus onChange={handleNewGroupChangeCallBack} />
                            <Form.Control.Feedback type='invalid'>Please provide a group name!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} lg={6}>
                        <Form.Group className='mb-4' controlId='controlGroupDescripInput'>
                            <Form.Label>Group description</Form.Label>
                            <Form.Control className='group-textbox' require type='text' autoFocus onChange={handleNewGroupChangeCallBack} />
                            <Form.Control.Feedback type='invalid'>Please provide a group description!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <Button variant='primary' type='submit' form='newGroupForm'>
                Create Group
            </Button>
        </div>
    )
}