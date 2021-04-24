import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import {db} from '../firebase'

export default function ContactForm() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("India")
  const [loader, SetLoader] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    SetLoader(true)

    db.collection('contacts').add({
      name: name,
      email: email,
      country: country,
    })
    .then(()=>{
      alert("Message has been submitted")
      SetLoader(false)
    })
    .catch(error => {
      alert(error.message)
      SetLoader(false)
    })
    //After Submission clear the form
    setName("")
    setEmail("")
    setCountry("India")
  }

    return (
        <div>
    <Container>
    <Form className="mt-5" onSubmit={handleSubmit}>

    <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="Name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicCountry">
    <Form.Label>Country</Form.Label>
    <Form.Control type="text" placeholder="Country" value={country} onChange={(e)=>setCountry(e.target.value)} required/>
  </Form.Group>

  <Button variant="primary" type="submit" style={{background : loader ? "#ccc": ""}}>
    Submit
  </Button>


</Form>
</Container>
        </div>
    )
}
