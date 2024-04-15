import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBookingPage from './pages/ConfirmedBookingPage';
import Footer from './components/Footer';

function App() {

  
  return (
    <>
    <Navbar/>
    <Routes>
    <Route
      index
      element={<HomePage />}
    />
    <Route
      path="reservations"
      element={
        <div>
          <BookingPage
          
          />
        </div>
      }
    />

    <Route
      path="confirmation"
      element={<ConfirmedBookingPage />}
    />
  </Routes>
    <Footer/>
    </>
  );
}

export default App;
