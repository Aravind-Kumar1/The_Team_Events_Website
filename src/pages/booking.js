import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/Booking/BookingForm";
import "../styles/booking.css";

export default function Booking() {
  return (
    <div>
      <Header />
      <div className="booking-page">
        <BookingForm />
      </div>
      <Footer />
    </div>
  );
}
