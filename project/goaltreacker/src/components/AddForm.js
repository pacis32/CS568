import React,{useState} from 'react'
import {Form, Modal, Button} from 'react-bootstrap';

import AddFormStep from './AddStepForm';
import axios from 'axios';
import { GoalContext } from './GoalContext';
import { useContext } from 'react';

axios.defaults.baseURL = 'http://localhost:4000'

export default function AddForm() {
    const {addGoal} = useContext(GoalContext);

    const [newGoal, setNewGoal] = useState({
        Title:"", description:"",  deadline:""
    });

    const [show, setShow] = useState(false);

    const [goalId, setGoalId]= useState("")
    
    const onInputChange = (e) => {
        setNewGoal({...newGoal,[e.target.name]: e.target.value})
    }

    const {title, description,  deadline}= newGoal;

    const handleSubmit = (e)=> {
       e.preventDefault()
       addGoal()
       setShow(true)
    
    };
    const handleClose = () => setShow(false);
  return (
  <>
    <Form >
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            
            <Form.Control
                    as="textarea"
                    placeholder="Description"
                    rows={2}
                    name="description"
                    value={description}
                    onChange = { (e) => onInputChange(e)}
                />
                <Form.Control
                    type="date"
                    placeholder="Deadline"
                    name="deadline"
                    value={deadline}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Button onClick={handleSubmit} variant="success" type="button" >
                Add Step
            </Button>
        </Form>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Goal
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddFormStep goalId={goalId} />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>

        

        </>
    
  )
}
