"use client"
import Layout from '@/app/components/layout'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row,  } from 'react-bootstrap'

export default function UserCreate() {
    const[state, setState]=useState({name:'', email:''})
    const router = useRouter()
    const onChangeHandler = e => {
        const {name, value} = e.target
        setState(prevState => ({...prevState,[name]: value}))
    }
    const onSubmitHandler = async(e) => {
        e.preventDefault()
        console.log({state})


        const add = await fetch('/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
          });
          const res = await add.json();
          if(res.status === 200){
            router.push('/users')
          }else{
            console.log(`err `, res.data)
          }
        //   cache: 'no-store',
        // const res = fetch(`/api/users`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(state)
        // });
        // const result = res.json()
        
    }
  return (
    <Layout>
    <Container>
        <Row>
            <h1>User Create Page</h1>
            <Col>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={state.name} onChange={onChangeHandler} placeholder="John" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={state.email} onChange={onChangeHandler} placeholder="name@example.com" />
                </Form.Group>
                <Button variant="primary" onClick={onSubmitHandler}>
                    Submit
                </Button>
            </Form>
            </Col>
        </Row>
    </Container>
    </Layout>
  )
}
