import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { ContextProvider } from "./utils/global.context";

function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/favs" element={<Favs />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="*" element={<h1>Page no funtion</h1>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;

