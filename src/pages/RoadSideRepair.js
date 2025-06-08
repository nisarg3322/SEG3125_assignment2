// import logo from './logo.svg';
import "../App.css";
import { Link } from "react-router-dom";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";

function RoadSideRepair() {
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
                <label>Location:</label>
                <br />
                <input type="text" name="location" />
              </div>
            </Col>
            <Col className="mt-3" md={3}>
              {" "}
              <Button
                as={Link}
                to="/RoadSideSuccessful/SuccessMessage"
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
                We'll be there as soon as possible!
              </h2>
              <Image
                className="pic-truck"
                src="/RepairTruckPic.jpg"
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

export default RoadSideRepair;
