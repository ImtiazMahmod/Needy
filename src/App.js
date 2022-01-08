import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Pay from "./Pages/Dashboard/Pay/Pay";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Review from "./Pages/Dashboard/Review/Review";
import AllExplore from "./Pages/AllExplore/AllExplore";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Pages/Login/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/explore" element={<AllExplore />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route
              path="pay"
              element={
                <PrivateRoute>
                  <Pay />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="myOrders"
              element={
                <PrivateRoute>
                  <MyOrders />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="review"
              element={
                <PrivateRoute>
                  <Review />
                </PrivateRoute>
              }
            ></Route>
          </Route>
          <Route
            path="/placeOrder/:productId"
            element={
              <PrivateRoute>
                <PlaceOrder />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
