import React,{useState} from 'react'
import {Form, Modal, Button} from 'react-bootstrap';
import AddStep from './AddStep';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000'

export default function AddGoal() {

    const [newGoal, setNewGoal] = useState({
        Title:"", description:"",  deadline:""
    });

    const [show, setShow] = useState(false);

    const [goalId, setGoalId]= useState("")
    
    const onInputChange = (e) => {
        setNewGoal({...newGoal,[e.target.name]: e.target.value})
    }

    const {title, description,  deadline}= newGoal;

    const handleSubmit = async () => {
       
      const response = await axios.post('/addGoal', newGoal )
       setGoalId(response.data);
       console.log(response.data)
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
                Add Step
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddStep goalId={goalId}/>
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
