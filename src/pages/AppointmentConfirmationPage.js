import "../App.css";
import { Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";

function AppointmentConfirmationPage() {
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
            Your appointment has been confirmed. We look forward to serving you!
            <br />
            <br />
            <strong>Appointment Details:</strong>
            <br />
            Date: [Selected Date]
            <br />
            Time: [Selected Time]
            <br />
            Service Type: [Selected Service Type]
            <br />
            <strong>Thank you for choosing BikeRep!</strong>
            <br />
            If you have any questions, feel free to contact us at
            support@bikerep.com
          </Alert>
        </Container>
      </header>
    </div>
  );
}

export default AppointmentConfirmationPage;
