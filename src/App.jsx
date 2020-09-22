import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
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
                <Row className="h-10">
                  <Breadcrumb className="bg-transparent">
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://www.youtube.com/watch?v=9QS0q3mGPGg" target="_blank">Winning</Breadcrumb.Item>
                    <Breadcrumb.Item active>Active</Breadcrumb.Item>
                  </Breadcrumb>
                </Row>
                <Row className="h-75 d-flex justify-content-center align-items-center">
                  <Col xs={8}>
                    <InputGroup>
                      <FormControl type="text" placeholder="Search" className="rounded-0 border-dark" />
                      <InputGroup.Append>
                        <Button className="bg-dark rounded-0 border-dark">Search</Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
              <Col xs={4} className="bg-secondary d-flex justify-content-center align-items-center">
                <Card className="bg-dark border-dark text-center" style={{ width: '13rem' }}>
                  <Card.Img src={cardImage} alt="Card image" />
                  <Card.Body>
                    <Card.ImgOverlay>
                      <Card.Title className="text-white mt-5">Nice Title</Card.Title>
                      <Card.Subtitle className="text-white">Subtitle too</Card.Subtitle>
                    </Card.ImgOverlay>
                    <Card.Text className="text-white">
                      This is some amazing text. Legit cool.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="h-50">
              <Col xs={4} className="bg-danger">
                DatePicker
            </Col>
              <Col xs={8} className="bg-success d-flex justify-content-center align-items-center">
                <Dropdown className="rounded-0">
                  <Dropdown.Toggle className="rounded-0" variant="dark" id="dropdown-basic">
                    Dropping Down
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="rounded-0">
                    <Dropdown.Item href="#action-1">One</Dropdown.Item>
                    <Dropdown.Item href="#action-2">Two</Dropdown.Item>
                    <Dropdown.Item href="#action-3">Three</Dropdown.Item>
                    <Dropdown.Item href="#action-4">Caramba</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
          <Col xs={3} className="bg-warning h-100 d-flex justify-content-center align-items-center">
            <Form>
              <Form.Row>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Row>
              <Form.Row>
                <Form.Group>
                  <Form.Control placeholder="City" />
                </Form.Group>
                <Form.Group className="ml-2">
                  <Form.Control placeholder="Postal code" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Row>
            </Form>
          </Col>
          <Col xs={3} className="h-100">
            <Row className="h-50">
              <Col className="bg-info h-100 d-flex justify-content-center align-items-center">
                <Col xs={10}>
                  <Form className="w-100">
                    <Form.Group className="text-center text-white" controlId="formBasicRange">
                      <Form.Label>Slider</Form.Label>
                      <Form.Control type="range" variant="" />
                      <Form.Control className="mt-2" type="range" />
                      <Form.Control className="mt-2" type="range" />
                    </Form.Group>
                  </Form>
                </Col>
              </Col>
            </Row>
            <Row className="h-50">
              <Col className="bg-primary h-100 d-flex flex-column justify-content-center align-items-center">
                <Form.Check
                  className="text-white"
                  label="Option 1"
                />
                <Form.Check
                  className="text-white"
                  label="Option 2"
                />
                <Form.Check
                  className="text-white"
                  label="Option 3"
                />

              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
