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
      <Container fluid>
        <Row>
          <Col>
            <Row>
              <Col className="bg-primary">
                Breadcrumb and Search input
            </Col>
              <Col className="bg-secondary text-white">
                Card
            </Col>
            </Row>
            <Row>
              <Col className="bg-danger">
                DatePicker
            </Col>
              <Col className="bg-success">
                Dropdown
            </Col>
            </Row>
          </Col>
          <Col className="bg-warning">
            Form goes here
        </Col>
          <Col>
            <Row>
              <Col className="bg-info">
                Slider
            </Col>
            </Row>
            <Row>
              <Col className="bg-primary">
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
