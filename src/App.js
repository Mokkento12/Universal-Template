import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactForm from "./pages/ContactForm/ContactForm";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <Router>
        <Header />
        <main className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactForm />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
