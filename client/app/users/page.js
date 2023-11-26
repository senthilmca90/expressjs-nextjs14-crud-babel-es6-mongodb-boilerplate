'use client'
import React, { useEffect, useState } from 'react'
import useSWR from "swr"
import { fetcher } from "../libs"
import Link from 'next/link'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import Layout from '../components/layout'

export default function Users() {

    const[users, setUsers] = useState([])
    const {data} = useSWR(`/api/users`, fetcher)
    console.log(`data.length `, data?.length)
    useEffect(() => {
      setUsers(data)
      console.log(`inside`)
    }, [data])
    const onEditHandler = id => {

    }
    const onDeleteHandler = async(id) => {
      console.log({id})
        const res = await fetch(`/api/users/${id}`, {
          method: 'DELETE',
          body:''
        })
        console.log({res})
        const filData = await users?.filter(e => e?._id !== id)
        console.log(`filData.length`, filData.length)
        setUsers(filData)

    }
    console.log(`users?.length `,users?.length)

  return (
    <Layout>
    <Container>
      <Row>
          <h1>User List</h1>
          <div>
          <Link className='btn btn-primary float-end' href={`/user/create`}>Create New</Link>
          </div>
          </Row>
          <Row>
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((elem, index) => 
              <tr key={index}>
              <td>{index+1}</td>
              <td>{elem.name}</td>
              <td>{elem.email}</td>
              <td>
              <Link className='btn btn-primary' variant="primary" href={`/user/edit/${elem._id}`}>
                Edit
              </Link>
                {' '}
              <Button variant="danger" onClick={e => onDeleteHandler(elem._id)}>
                Delete
              </Button>
              </td>
            </tr>
              
              )}
              
              
            </tbody>
          </Table>
          </Row>
    </Container>
    </Layout>
  )
}
