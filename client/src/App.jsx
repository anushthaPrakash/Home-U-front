import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import BuyItem from "./components/BuyItem/BuyItem";
import FrontPage from "./components/Homepage/FrontPage";
import { UserAuthContextProvider } from "./components/contexts/userAuthContext";
import Protected from "./components/Protected";

function App() {
  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <FrontPage />
              </Protected>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/buy"
            element={
              <Protected>
                <BuyItem />
              </Protected>
            }
          />
          <Route
            path="/sell/:item"
            element={
              <Protected>
                <Login />
              </Protected>
            }
          />
          <Route
            path="/success/:message"
            element={
              <Protected>
                <Login />
              </Protected>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
