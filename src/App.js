import "./App.css";
import Navbar from "./layouts/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home, Cars, Contacts, CarDetails, Customers, Rentals, SignIn, SignUp } from "./pages";
import Footer from "./components/footer/Footer";
import Context from "./context/context";

function App() {
  return (
    <Context>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </Context>
  );
}

export default App;
