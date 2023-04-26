import { GoalContext } from './GoalContext';
import { useContext } from 'react';
import React, { useState } from 'react'
import { Form, Modal, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import AddStep from './AddStep';

axios.defaults.baseURL = 'http://localhost:4000'


export default function AddFormStep({ goalId }) {

    const {addStep} = useContext(GoalContext);


    const [newGoal, setNewGoal] = useState({
        Title: "", description: "", status: "", deadline: ""
    });

    const onInputChange = (e) => {
        setNewGoal({ ...newGoal, [e.target.name]: e.target.value })
    }

    const {
        title, description, status, deadline
    } = newGoal;

    const handleSubmit = async (e) => {
        e.preventDefault();
        AddStep(goalId)
    }

    return (
        <>
            <h3>AddStep</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={title}
                        onChange={(e) => onInputChange(e)}
                        required
                    />

                    <Form.Control
                        as="textarea"
                        placeholder="Description"
                        rows={2}
                        name="description"
                        value={description}
                        onChange={(e) => onInputChange(e)}
                    />

                    <Form.Control
                        type="text"
                        placeholder=""
                        name="status"
                        value={status}
                        onChange={(e) => onInputChange(e)}
                        required
                    />

                    <Form.Control
                        type="date"
                        placeholder="Deadline"
                        name="deadline"
                        value={deadline}
                        onChange={(e) => onInputChange(e)}
                    />
                </Form.Group>
                <Button variant="success" type="submit" block>
                    Save
                </Button>
            </Form>
        </>


    )
}
