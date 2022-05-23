import React from 'react'
import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import { useState } from 'react'

function Teacher() {
    const [teachers, setTeachers] = useState([])
    const [addButton, setAddButton] = useState(false)
    const [listBtn, setListBtn] = useState(false)
    const [deleteBtn, setDeleteBtn] = useState(false)

    const add = (event) => {
        event.preventDefault()
        const data = event.target
        const newTeacher = {
            name: data.name.value,
            subject: data.subject.value,
            email: data.email.value
        }
        //Add teachers in array
        setTeachers([...teachers, newTeacher])
        console.log(teachers);
        alert('Teacher added successfully')
    }

    const handleDelete = (id) =>{
        const teach =[...teachers]
        const tch_id = teachers.findIndex((teacher)=> teacher.index == id)
        teach.splice(tch_id, 1)
        setTeachers(teach)
    }
   
    return (
        <div>
            <div className='mt-2 p-3'>
                <Button variant="info"
                    onClick={() => {
                        setAddButton(!addButton)
                        setDeleteBtn(false)
                        setListBtn(false)
                    }}>Add Teacher</Button>{' '}

                <Button variant="info"
                    onClick={() => {
                        setListBtn(!listBtn)
                        setAddButton(false)
                        setDeleteBtn(false)
                    }}>Teachers List</Button>{' '}
            </div>
            <hr />
            <Row>
                <Col lg={4}></Col>
                <Col lg={4}>
                    <div>
                        {

                            addButton && <Form className='mt-3' onSubmit={add}>
                                <Form.Group className="mb-3" controlId="formBasicProductCode">
                                    <Form.Label>Teacher Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name='name' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicProductName">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="subject" name='subject' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicQuantity">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control type="email" placeholder="email" name='email' />
                                </Form.Group>
                                <Button variant="info" type="submit">
                                    Add Teacher
                                </Button>
                            </Form>
                        }

                    </div>

                   
                    {/* Teacher  listing */}
                    <div>
                        {
                            listBtn &&
                            <Table striped bordered hover variant="dark" className='mt-3'>
                                <thead>
                                    <tr>
                                        <th>Sl.No:</th>
                                        <th>Teacher Name</th>
                                        <th>Subject</th>
                                        <th>E-mail</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        teachers.map((item, index) => {
                                            return (
                            
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.subject}</td>
                                                    <td>{item.email}</td>
                                                    <td><i class="fa fa-trash" aria-hidden="true" onClick={handleDelete}></i></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        }

                    </div>
                </Col>
                <Col lg={4}></Col>
            </Row>
        </div>
    )
}

export default Teacher