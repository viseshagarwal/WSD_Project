import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import Login from "./login/login";
import Logout from "./login/logout";
import Signup from "./signup/signup";
import Error from "./login/error404";
import About from "./static_pages/about";
import Contact from "./static_pages/contact";
import Orders from "./orders/orders";
import { ShopContextProvider } from "./context/ShopContext";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
