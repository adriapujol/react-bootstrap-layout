import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import cardImage from './img/cardbg.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid className="min-vh-100">
        <Row className="vh-100">
          <Col xs={6} className="h-100">
            <Row className="h-50">
              <Col xs={8} className="bg-primary">
                Breadcrumb
                Data picker
            </Col>
              <Col xs={4} className="bg-secondary d-flex justify-content-center align-items-center">
                <Card style={{ width: '13rem' }}>
                  <Card.Img src={cardImage} alt="Card image" />
                  <Card.Body>
                    <Card.ImgOverlay className="d-flex flex-column">
                        <Card.Title className="text-white">Nice Title</Card.Title>
                        <Card.Subtitle className="text-white">Subtitle this</Card.Subtitle>
                    </Card.ImgOverlay>
                    <Card.Text>
                      This is some amazing text dammit. Legit cool.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="h-50">
              <Col xs={4} className="bg-danger">
                DatePicker
            </Col>
              <Col xs={8} className="bg-success">
                Dropdown
            </Col>
            </Row>
          </Col>
          <Col xs={3} className="bg-warning h-100">
            Form goes here
          </Col>
          <Col xs={3} className="h-100">
            <Row className="h-50">
              <Col className="bg-info h-100">
                Slider
            </Col>
            </Row>
            <Row className="h-50">
              <Col className="bg-primary h-100">
                Checkbox
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
