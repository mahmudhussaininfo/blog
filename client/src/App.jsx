import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("Token"));
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={
            authToken ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login setAuthToken={setAuthToken} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={authToken ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
