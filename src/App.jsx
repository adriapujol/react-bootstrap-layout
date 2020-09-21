import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid className="min-vh-100">
        <Row className="vh-100">
          <Col className="h-100">
            <Row className="h-50">
              <Col className="bg-primary">
                Breadcrumb
                Data picker
            </Col>
              <Col className="bg-secondary text-white">
                Card
            </Col>
            </Row>
            <Row className="h-50">
              <Col className="bg-danger">
                DatePicker
            </Col>
              <Col className="bg-success">
                Dropdown
            </Col>
            </Row>
          </Col>
          <Col className="bg-warning h-100">
            Form goes here
          </Col>
          <Col className="h-100">
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
