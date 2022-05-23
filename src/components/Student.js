import React from 'react'
import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import { useState } from 'react'

function Student() {
    const [students, setStudents] = useState([])
    const [addButton, setAddButton] = useState(false)
    const [listBtn, setListBtn] = useState(false)
    const [deleteBtn, setDeleteBtn] = useState(false)

    const add = (event) => {
        event.preventDefault()
        const data = event.target
        const newStudent = {
            name: data.name.value,
            class: data.class.value,
            age: data.age.value
        }
        //Add students in array
        setStudents([...students, newStudent])
        console.log(students);
        alert('Student added successfully')
    }
    const handleDelete = (id) =>{
        const stud =[...students]
        const st_id = students.findIndex((student)=> student.index == id)
        stud.splice(st_id, 1)
        setStudents(stud)
    }
   
    return (
        <div>
            <div className='mt-2 p-3'>
                <Button variant="info"
                    onClick={() => {
                        setAddButton(!addButton)
                        setDeleteBtn(false)
                        setListBtn(false)
                    }}>Add Student</Button>{' '}

                <Button variant="info"
                    onClick={() => {
                        setListBtn(!listBtn)
                        setAddButton(false)
                        setDeleteBtn(false)
                    }}>Students List</Button>{' '}
            </div>
            <hr />
            <Row>
                <Col lg={4}></Col>
                <Col lg={4}>
                    <div>
                        {

                            addButton && <Form className='mt-3' onSubmit={add}>
                                <Form.Group className="mb-3" controlId="formBasicProductCode">
                                    <Form.Label>Student Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name='name' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicProductName">
                                    <Form.Label>Class</Form.Label>
                                    <Form.Control type="text" placeholder="class" name='class' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicQuantity">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="number" placeholder="age" name='age' />
                                </Form.Group>
                                <Button variant="info" type="submit">
                                    Add Student
                                </Button>
                            </Form>
                        }

                    </div>

                   
                    {/* Student  listing */}
                    <div>
                        {
                            listBtn &&
                            <Table striped bordered hover variant="dark" className='mt-3'>
                                <thead>
                                    <tr>
                                        <th>Sl.No:</th>
                                        <th>Student Name</th>
                                        <th>Class</th>
                                        <th>Age</th>
                                        <th>Action</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        students.map((item, index) => {
                                            return (
                            
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.class}</td>
                                                    <td>{item.age}</td>
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

export default Student