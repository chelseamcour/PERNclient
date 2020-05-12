import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const LootEdit = (props) => {
    const [editRaceName, setEditRaceName] = useState(props.logToUpdate.raceName);
    const [editRaceDate, setEditRaceDate] = useState(props.logToUpdate.raceDate);
    const [editRaceCity, setEditRaceCity] = useState(props.logToUpdate.raceCity);
    const [editRaceState, setEditRaceState] = useState(props.logToUpdate.raceState);
    const [editRaceCountry, setEditRaceCountry] = useState(props.logToUpdate.raceCountry);
    const [editRaceDistance, setEditRaceDistance] = useState(props.logToUpdate.raceDistance);
    const [editMedal, setEditMedal] = useState(props.logToUpdate.medal);
    const [editMedalRating, setEditMedalRating] = useState(props.logToUpdate.medalRating);
    const [editTshirt, setEditTshirt] = useState(props.logToUpdate.tshirt);
    const [editTshirtRating, setEditTshirtRating] = useState(props.logToUpdate.tshirtRating);
    const [editSnacks, setEditSnacks] = useState(props.logToUpdate.snacks);
    const [editSnacksRating, setEditSnacksRating] = useState(props.logToUpdate.snacksRating);
    const [editPhotos, setEditPhotos] = useState(props.logToUpdate.photos);
    const [editId, setEditId] = useState(props.logToUpdate.id);

    console.log(editId, "LOOT EDIT")

    const logUpdate = (event, log) => { 
        event.preventDefault();
        fetch(`http://localhost:3002/log/${editId}`, {
            method: 'PUT',
            body: JSON.stringify({
                raceName: editRaceName, raceDate: editRaceDate,
                raceCity: editRaceCity, raceState: editRaceState, raceCountry: editRaceCountry,
                raceDistance: editRaceDistance,
                medal: editMedal, medalRating: editMedalRating,
                tshirt: editTshirt, tshirtRating: editTshirtRating,
                snacks: editSnacks, snacksRating: editSnacksRating,
                photos: editPhotos
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
        <Modal isOpen={true}>
            <ModalHeader>Log Your Loot</ModalHeader>
            <ModalBody>
                <Form onSubmit={logUpdate}>
                <FormGroup>
                        <Label htmlFor="race name">Edit Race Name:</Label>
                        <Input name="race name" value={editRaceName} onChange={(e) => setEditRaceName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="race date">Edit Date:</Label>
                        <Input name="race date" value={editRaceDate} onChange={(e) => setEditRaceDate(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="race city">Edit City:</Label>
                        <Input name="race city" value={editRaceCity} onChange={(e) => setEditRaceCity(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="race state">Edit State:</Label>
                        <Input name="race state" value={editRaceState} onChange={(e) => setEditRaceState(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="race country">Edit Country:</Label>
                        <Input name="race country" value={editRaceCountry} onChange={(e) => setEditRaceCountry(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="race distance">Edit Distance:</Label>
                        <Input name="race distance" value={editRaceDistance} onChange={(e) => setEditRaceDistance(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="medal">Edit Medal:</Label>
                        <Input name="medal" value={editMedal} onChange={(e) => setEditMedal(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="medal rating">Edit Medal Rating:</Label>
                        <Input name="medal rating" value={editMedalRating} onChange={(e) => setEditMedalRating(e.target.value)}/>
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
                        <Label htmlFor="snacks">Edit Snacks:</Label>
                        <Input name="snacks" value={editSnacks} onChange={(e) => setEditSnacks(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="snacks rating">Edit Snacks Rating:</Label>
                        <Input name="snacks rating" value={editSnacksRating} onChange={(e) => setEditSnacksRating(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="photos">Edit Phots:</Label>
                        <Input name="photos" value={editPhotos} onChange={(e) => setEditPhotos(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Update your loot!</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
};

export default LootEdit;