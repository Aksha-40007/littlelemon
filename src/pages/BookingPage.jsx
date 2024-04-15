import { useReducer } from "react";
import { fetchAPI } from "../API/Api";
import BookingForm from "../components/BookingForm";
import "../components/css/booking.css";

export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <div className="reservation">
      <header className="reserve-table">
        {/* <h3 className="reserve-header-text">
        Reserve a table
      </h3> */}
    </header>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </div>
  );
}