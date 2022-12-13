import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { getDatabase, ref as databaseRef, push as firebasePush } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function CreateGroupsForm(props) {

    const [isValid, setIsValid] = useState(false);
    const [groupTitleInput, setGroupTitleInput] = useState('');
    const [groupDescriptionInput, setGroupDescriptionInput] = useState('');
    const [groupImageFileInput, setGroupImageFileInput] = useState('');
    const [groupImageURL, setGroupImageURL] = useState('')

    const currentUser = props.currentUser;

    const addNewGroup = () => {
        const db = getDatabase();
        const userGroupsDbRef = databaseRef(db, 'userData/' + currentUser.id + '/userGroups');

        const newGroup = {
            "joined": true,
            "groupTitle": groupTitleInput.toUpperCase(),
            "groupDescription": groupDescriptionInput,
            "groupImage": groupImageURL,
            "footer": "Public"
        };
        firebasePush(userGroupsDbRef, newGroup)
    }
    
    const handleNewGroupChange = (event) => {
        const eventId = event.target.id;
        const eventValue = event.target.value;
        
        if (eventId === 'controlGroupImageFileInput') {
            setGroupImageFileInput(event.target.files[0])
            console.log(groupImageFileInput)
        }
        
        return eventId === 'controlGroupTitleInput' ? setGroupTitleInput(eventValue)
            : eventId === 'controlGroupDescriptionInput' ? setGroupDescriptionInput(eventValue)
            : '';
    }

    let timestamp = Date.now();
    let imgAddress = 'groupImages/' + timestamp + '.png';

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const storage = getStorage();
            const groupImagesRef = storageRef(storage, imgAddress);
            await uploadBytes(groupImagesRef, groupImageFileInput);
            const downloadUrlString = await getDownloadURL(groupImagesRef);
            setGroupImageURL(downloadUrlString);
        }
        if (form.checkValidity()) {
            addNewGroup();
        }
        setIsValid(true);
    }

    return (
        <div className="create-group-form">
            <h3>Create New Group</h3>
            <Form noValidate validated={isValid} onSubmit={handleSubmit} id='newGroupForm'>
                <Row>
                    <Col>
                        <Form.Group className='mb-4' controlId='controlGroupTitleInput'>
                            <Form.Label>Group name</Form.Label>
                            <Form.Control className='group-textbox' required type='text' autoFocus onChange={handleNewGroupChange} />
                            <Form.Control.Feedback type='invalid'>Please provide a group name!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className='mb-4' controlId='controlGroupDescriptionInput'>
                            <Form.Label>Group description</Form.Label>
                            <Form.Control className='group-textbox' required type='text' onChange={handleNewGroupChange} />
                            <Form.Control.Feedback type='invalid'>Please provide a group description!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className='mb-4' controlId='controlGroupImageFileInput'>
                            <Form.Label>Group image</Form.Label>
                            <Form.Control className='group-textbox' required type='file' onChange={handleNewGroupChange} />
                            <Form.Control.Feedback type='invalid'>Please provide a group image!</Form.Control.Feedback>
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