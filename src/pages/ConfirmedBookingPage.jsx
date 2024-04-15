import { useEffect, useState } from "react";

const ConfirmedBookingPage = () => {
    const [items,setItems]=useState(localStorage.getItem('bookings'));

  useEffect(() => {
     console.log(items);
  }, [items]);

  return (
    <>
      <div className="booking-confirmed">
        <h1 className="centertext">Booking Confirmed!</h1>
        <h2>Date: {items}</h2>
        <h2>Number of Guests: {items}</h2>
      </div>
    </>
  );
};

export default ConfirmedBookingPage;