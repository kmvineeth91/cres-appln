import React from 'react'
import {Button, Form,Row,Col } from 'react-bootstrap'

function AddTeacher() {
    return (
        <div>
            <Row>
            <Col lg={4}></Col>
            <Col lg={4}>
            <Form className='mt-3' >
                <Form.Group className="mb-3" controlId="formBasicProductCode">
                    <Form.Label>Product Code</Form.Label>
                    <Form.Control type="number" placeholder="Enter Product Code" name='product_code' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProductName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Name" name='product_name' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" placeholder="Quantity" name='qty' />
                </Form.Group>
                <Button variant="info" type="submit">
                    Add Product
                </Button>
            </Form>
            </Col>
            <Col lg={4}></Col>
            </Row>
           
        </div>
    )
}

export default AddTeacher