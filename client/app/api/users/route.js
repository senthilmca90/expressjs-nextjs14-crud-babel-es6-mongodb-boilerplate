import axios from "axios"

// export const dynamic = 'force-dynamic'
export async function GET() {
    const res = await fetch(process.env.API_URL+`/api/v1/users/all`)
    const result = await res.json()
    console.log({result})
    return Response.json(result)
}

export async function POST(request) {
    const data = await request.json()
    console.log({data})
   const res = await axios.post('http://localhost:4000/api/v1/users/create', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return Response.json({status: res.status, data: res.data})
  }