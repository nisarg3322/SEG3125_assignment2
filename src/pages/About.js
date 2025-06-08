import Navbar from "./navbar";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function About() {
  return (
    <div className="App">
      <Navbar />
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "60vh" }}
      >
        <h1>About Us</h1>
        <p>
          We are a company dedicated to providing the best service possible.
        </p>
        <p>
          Our team is made up of experienced professionals who are passionate
          about what they do.
        </p>
        <p>Contact us at: support@bikerep.com</p>
      </Container>
    </div>
  );
}

export default About;
