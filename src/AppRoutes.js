import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoadSideRepair from "./pages/RoadSideRepair";
import Home from "./pages/Home";
import SuccessMessage from "./pages/SuccessMessage";
import BookAppointment from "./pages/BookAppointment";
import AppointmentConfirmationPage from "./pages/AppointmentConfirmationPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RoadSideRepair" element={<RoadSideRepair />} />
        <Route
          path="/RoadSideSuccessful/SuccessMessage"
          element={<SuccessMessage />}
        />
        <Route path="/BookAppointment" element={<BookAppointment />} />
        <Route
          path="/AppointmentConfirmation"
          element={<AppointmentConfirmationPage />}
        />
        <Route path="/AppointmentSuccessful" element={<SuccessMessage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};
