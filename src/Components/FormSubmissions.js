import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Navbar from './Navbar'

function FormSubmissions() {
  const [contact, setContact] = useState([]);

  function getData() {
    db.collection("contacts").onSnapshot((querySnapshot) => {
      const items = [];
      // console.log(items)
      // console.log(contact)
     
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        // const id = doc.id
        // console.log(id)
      });
      setContact(items);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar/>
      {contact.map((data) => (
        //replace this key 
        <div key={data.name}>
          <Container className="mt-3 my-3">
          <CardGroup>
              <Card bg="info" className="text-light">
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Subtitle className="mb-2">
                    {data.email}
                  </Card.Subtitle>
                  <Card.Text>
                   {data.country}
                  </Card.Text>
                </Card.Body>
              </Card>
              </CardGroup>
          </Container>
        </div>
      ))}
    </div>
  );
}
export default FormSubmissions;
