import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const LootEdit = (props) => {
    const [editMedal, setEditMedal] = useState(props.logToUpdate.medal);
    const [editMedalRating, setEditMedalRating] = useState(props.logToUpdate.medalRating);
    const [editMedalComments, setEditMedalComments] = useState('');
    const [editTshirt, setEditTshirt] = useState('');
    const [editTshirtRating, setEditTshirtRating] = useState('');
    const [editTshirtComments, setEditTshirtComments] = useState('');
    const [editSnacks, setEditSnacks] = useState('');
    const [editSnacksRating, setEditSnacksRating] = useState('');
    const [editSnacksComments, setEditSnacksComments] = useState('');
    const [editPhotos, setEditPhotos] = useState('');
    const [editComments, setEditComments] = useState('');
    // const [editRaceId, setEditRaceId] = useState('');
    const logUpdate = (event, log) => { //1 - WorkoutUpdate takes two arguments:  the first allows us to avoid a page reload upon form submission, while the second is used to specify the workout needing an update in our database.
        event.preventDefault();
        fetch('http://localhost:3002/api/log/${props.logToUpdate.id}', {
            method: 'PUT',
            body: JSON.stringify({medal: editMedal, medalRating: editMedalRating, medalComments: editMedalComments,
                tshirt: editTshirt, tshirtRating: editTshirtRating, tshirtComments: editTshirtComments,
                snacks: editSnacks, snacksRating: editSnacksRating, snacksComments: editSnacksComments,
                photos: editPhotos, comments: editComments
            }),
            headers: new Headers({ 
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchLogs(); 
            props.updateOff();
        })
    }
    return(
        <Modal is Open={true}>
            <ModalHeader>Log Your Loot</ModalHeader>
            <ModalBody>
                <Form onSubmit={logUpdate}>
                    <FormGroup>
                        <Label htmlFor="medal">Edit Medal:</Label>
                        <Input name="medal" value={editMedal} onChange={(e) => setEditMedal(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="medal rating">Edit Medal Rating:</Label>
                        <Input name="medal rating" value={editMedalRating} onChange={(e) => setEditMedalRating(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="medal comments">Edit Medal Comments:</Label>
                        <Input name="medal comments" value={editMedalComments} onChange={(e) => setEditMedalComments(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="tshirt">Edit Tshirt:</Label>
                        <Input name="tshirt" value={editTshirt} onChange={(e) => setEditTshirt(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="tshirt rating">Edit Tshirt Rating:</Label>
                        <Input name="tshirt rating" value={editTshirtRating} onChange={(e) => setEditTshirtRating(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="tshirt comments">Edit Tshirt Comments:</Label>
                        <Input name="tshirt comments" value={editTshirtComments} onChange={(e) => setEditTshirtComments(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="snacks">Edit Snacks:</Label>
                        <Input name="snacks" value={editSnacks} onChange={(e) => setEditSnacks(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="snacks rating">Edit Snacks Rating:</Label>
                        <Input name="snacks rating" value={editSnacksRating} onChange={(e) => setEditSnacksRating(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="snacks comments">Edit Snacks Comments:</Label>
                        <Input name="snack comments" value={editSnacksComments} onChange={(e) => setEditSnacksComments(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="photos">Edit Phots:</Label>
                        <Input name="photos" value={editPhotos} onChange={(e) => setEditPhotos(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="comments">Edit  Comments:</Label>
                        <Input name="comments" value={editComments} onChange={(e) => setEditComments(e.target.value)}/>
                    </FormGroup>
                    {/* <FormGroup>
                        <Label htmlFor="race id">Edit Race Id:</Label>
                        <Input name="medal comments" value={editMedalComments} onChange={(e) => setEditMedalComments(e.target.value)}/>
                    </FormGroup> */}
                    <Button type="submit">Update your loot!</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
};

export default LootEdit;