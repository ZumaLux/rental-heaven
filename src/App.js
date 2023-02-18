import "./App.css";
import Navbar from "./layouts/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home, Cars, Contacts, CarDetails, Customers, Rentals, SignIn } from "./pages";
import Footer from "./layouts/footer/Footer";
import AuthContext from "./context/authContext";
import CarContext from "./context/carContext";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <AuthContext>
      <CarContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route element={<PrivateRoutes />}>
            <Route exact path="/customers" element={<Customers />} />
            <Route exact path="/rentals" element={<Rentals />} />
          </Route>
        </Routes>
        <Footer />
      </CarContext>
    </AuthContext>
  );
}

export default App;
