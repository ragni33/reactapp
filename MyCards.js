import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.jpg'
import card5 from '../assets/card5.jpg'
import card6 from '../assets/card6.jpg'



function MyCards() {
  return (
   
   <Row style={{margin: "1%"}}>
      <Col sm={12} md={4}>
        <Card>
            <Card.Body>
          <Card.Img variant="top" src={card1} /> 
           <Card.Title>Software Development</Card.Title>
            <Card.Text>
              We develop robust softwares for your needs.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4}>
        <Card>
        <Card.Img variant="top" src={card2} />
          <Card.Body>
            <Card.Title>Marketing Services</Card.Title>
            <Card.Text>
              We have marketing strategies for your business.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4}>
        <Card>
          <Card.Body>
          <Card.Img variant="top" src={card3} />
      
            <Card.Title>IoT Services</Card.Title>
            <Card.Text>
              We have effective IoT service for your brand.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col sm={12} md={4}>

        <Card>
            <Card.Body>
          <Card.Img variant="top" src={card4} /> 
           <Card.Title>IT Cloud</Card.Title>
            <Card.Text>
              Our cloud campaigns will fit your business needs.
            </Card.Text>
          </Card.Body>
        </Card>

      </Col>

      <Col sm={12} md={4}>
        <Card>
            <Card.Body>
          <Card.Img variant="top" src={card5} /> 
           <Card.Title>SEO Services</Card.Title>
            <Card.Text>
              Search engine optimisation services to rank your business. 
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4}>
        <Card>
            <Card.Body>
          <Card.Img variant="top" src={card6} /> 
           <Card.Title>IT Installations.</Card.Title>
            <Card.Text>
              We have essential services for your IT installations.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    
  );
}




export default MyCards;