import axios from "axios"

export async function GET(req, {params}){

    const id = await params?.id
    const res = await axios.get(`http://localhost:4000/api/v1/users/user-details/${id}`)
    return Response.json(res.data)
}

export async function PUT(request, {params}){
    const id = await params?.id
    const data = await request.json()
    console.log({data})
   const res = await axios.put(`http://localhost:4000/api/v1/users/update/${id}`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return Response.json({status: res.status, data: res.data})
}

export async function DELETE(req, { params }){
    const id = await params?.id
    console.log({id})
    const res = await axios.delete(`http://localhost:4000/api/v1/users/delete/${id}`, {data: {}})
    return Response.json({status: res.status, message: 'deleted successfully'})
}