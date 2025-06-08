import "../App.css";
import { Link } from "react-router-dom";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";
function BookAppointment() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Container>
          <Row className="mt-3">
            <Col md={3}>
              <div>
                <label>Name:</label>
                <br />
                <input type="text" name="name" />
              </div>
            </Col>
            <Col md={3}>
              <div>
                <label>Phone:</label>
                <br />
                <input type="tel" name="phone" />
              </div>
            </Col>
            <Col md={3}>
              <div>
                <label>Email:</label>
                <br />
                <input type="email" name="email" />
              </div>
            </Col>
            <Col md={3}>
              <div>
                <label>Preferred Date:</label>
                <br />
                <input type="date" name="date" />
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={3}>
              <div>
                <label>Preferred Time:</label>
                <br />
                <input type="time" name="time" />
              </div>
            </Col>
            <Col md={3}>
              <div>
                <label>Service Type:</label>
                <br />
                <select name="serviceType">
                  <option value="regularMaintenance">
                    Regular Maintenance
                  </option>
                  <option value="newBrakes">New Brakes</option>
                  <option value="tireChange">Tire Change</option>
                  <option value="chainReplacement">Chain Replacement</option>
                </select>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <label>Issue Description:</label>
                <br />
                <textarea name="issueDescription" rows="4" cols="30"></textarea>
              </div>
            </Col>
            <Col className="mt-3" md={3}>
              {" "}
              <Button
                as={Link}
                to="/AppointmentConfirmation"
                style={{
                  backgroundColor: "#28a745",
                  color: "black",
                  border: "none",
                }}
              >
                Submit
              </Button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="d-flex flex-column align-items-center" sm={12}>
              <h2 className="text-center">
                We'll confirm your appointment shortly!
              </h2>
              <Image
                className="pic-service"
                src="/BikeAppointmentService.jpg"
                roundedCircle
              />
            </Col>
          </Row>
        </Container>

        <footer></footer>
      </header>
    </div>
  );
}

export default BookAppointment;
