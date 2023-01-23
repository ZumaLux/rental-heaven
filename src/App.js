import "./App.css";
import Navbar from "./layouts/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home, Cars, Contacts, CarDetails } from "./pages";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
