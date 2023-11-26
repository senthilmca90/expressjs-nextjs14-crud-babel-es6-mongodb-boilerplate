"use client"
import Layout from '@/app/components/layout'
import { fetcher } from '@/app/libs'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row,  } from 'react-bootstrap'
import useSWR from 'swr'

export default function UserEdit({params}) {
  const id = params?.id
  console.log({id})
  const[user, setUser] = useState(null)
  const {data} = useSWR(`/api/users/${id}`, fetcher)


  useEffect(() => {
    setUser(data)
  }, [data])

    const router = useRouter()
    const onChangeHandler = e => {
        const {name, value} = e.target
        setUser(prevState => ({...prevState,[name]: value}))
    }
    const onSubmitHandler = async(e) => {
        e.preventDefault()

        const add = await fetch(`/api/users/${user._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          });
          const res = await add.json();
          if(res.status === 200){
            router.push('/users')
          }else{
            console.log(`err `, res.data)
          }
    }
  return (
    <Layout>
    <Container>
        <Row>
            <h1>User Edit Page</h1>
            <Col>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={user?.name} onChange={onChangeHandler} placeholder="John" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={user?.email} onChange={onChangeHandler} placeholder="name@example.com" />
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
