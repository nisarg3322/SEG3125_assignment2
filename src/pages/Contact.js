import "../App.css";
import Navbar from "./navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Alert } from "react-bootstrap";
function Contact() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };
  return (
    <div className="App">
      <Navbar />

      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "60vh" }}
      >
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>
        <Row className="mt-3">
          <Col md={6}>
            <div>
              <label>Name:</label>
              <br />
              <input type="text" name="name" />
            </div>
          </Col>
          <Col md={6}>
            <div>
              <label>Email:</label>
              <br />
              <input type="email" name="email" />
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <div>
              <label>Message:</label>
              <br />
              <textarea name="message" />
            </div>
          </Col>
        </Row>
        <Button type="submit" className="mt-3" onClick={handleSubmit}>
          Send
        </Button>
        {showAlert && (
          <Alert
            variant="success"
            onClose={() => setShowAlert(false)}
            dismissible
            className="mt-3"
          >
            Your message has been sent!
          </Alert>
        )}
      </Container>
    </div>
  );
}
export default Contact;
