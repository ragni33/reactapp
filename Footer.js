import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';








function Footer() {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', margin: "2%", paddingTop: "2%" }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>Digi Designs</h5>
            <p>123 Main Street<br />City, State ZIP<br />Phone: 123-456-7890</p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <ul className="list-unstyled" style={{margin: "1%"}}>
              <li><a href="#">Home</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Our Projects</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Connect</h5>
            <ul className="list-unstyled" style={{marginTop: "5px"}}>
              <li><a href="#"><i class="lab la-facebook-messenger"></i></a></li>
              <li><a href="#"><i class="lab la-twitter" style={{fontSize: "20px"}}></i></a></li>
              <li><a href="#"><i class="lab la-linkedin"></i></a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Contact Us</h5>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Control as="textarea" rows={3} placeholder="Enter message" />
              </Form.Group>

              <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <br />
            <ul className="list-unstyled">
              <li> <i class="las la-envelope-open">&nbsp;email@example.com</i></li>
              <li><i class="las la-phone">&nbsp;123-456-7890</i></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
