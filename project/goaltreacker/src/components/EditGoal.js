import React,{useContext, useEffect, useState} from 'react'
import {Form, Modal, Button, Alert} from 'react-bootstrap';
import EditStep from './EditStep';
import Moment from 'react-moment';
import axios from 'axios';
import { GoalContext } from './GoalContext';
import Goal from './Goal';

axios.defaults.baseURL = 'http://localhost:4000'

export default function EditGoal({theGoal}) {
 

    const [newGoal, setNewGoal] = useState(theGoal);

    const onInputChange = (e) => {
        setNewGoal({...newGoal,[e.target.name]: e.target.value})
    }

    
    const {updateGoal}= useContext(GoalContext)


 const handleClose = () => setShow(false)
 const [show, setShow] = useState(false)


 const handleSubmit= (e)=>{
    e.preventDefault();
   
    updateGoal(newGoal._id, newGoal)
    console.log("amani:", newGoal._id, newGoal )
 }

  return (
    <>
    {newGoal._id}
    <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Title"
                    name="title"
                   value={newGoal.title}
                    onChange={onInputChange}
                    required
                />
            
            <Form.Control
                    as="textarea"
                    placeholder="Description"
                    rows={2}
                    name="description"
                    value={newGoal.description}
                    onChange={onInputChange}
                    
                />
                <Form.Control
                    type="date"
                    placeholder="Deadline"
                    name="deadline"
                    value={newGoal.deadline}
                    onChange={onInputChange}
                    
                />
            </Form.Group>
            <Button   variant="success" type="submit" >
                Edit Goal
            </Button>
        </Form>
        </>
    
  )
}