// import logo from './logo.svg';
import "../App.css";
import { Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";

function SuccessMessage() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ height: "60vh" }}
        >
          <Alert
            style={{
              backgroundColor: "#28a745",
              color: "white",
              fontSize: "1.2rem",
              maxWidth: "400px",
              textAlign: "center",
            }}
          >
            <strong>Request Sent Successfully!</strong>
            <br />
            We're on our way to assist you with your bike repair.
          </Alert>
        </Container>

        <footer></footer>
      </header>
    </div>
  );
}

export default SuccessMessage;
