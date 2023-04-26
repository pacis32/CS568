import React from 'react'
import { Form, Modal, Button,  } from 'react-bootstrap';



export default function EditStep() {
  
  
  
  
    return (
  <>
    <h3>AddStep</h3>
    <Form>
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                
            />

         <Form.Control
                as="textarea"
                placeholder="Description"
                rows={2}
                name="description"
               
            />

            <Form.Control
                type="text"
                placeholder=""
                name="status"
                
            />

            <Form.Control
                type="date"
                placeholder="Deadline"
                name="deadline"
                
            />
        </Form.Group>
        <Button variant="success" type="submit" block>
            Save
        </Button>
    </Form>
</>
  )
}
