import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Wrapper from "./components/Wapper";
import Footer from "./components/Footer";
import BookSearch from "./pages/BookSearch";
import CheckSaved from "./pages/CheckSaved.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Nav />
        <Wrapper>
          <Route exact path="/" component={BookSearch} />
          <Route exact path="/saved" component={CheckSaved} />
        </Wrapper>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
