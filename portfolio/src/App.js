
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from './components/Sidebar';
import About from "./components/About";
import Services from "./components/Services";
import PortfolioGrid from './components/PortfolioGrid';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<PortfolioGrid />} />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" />
              <Route path="/services" element={<Services/>} />
              <Route path="/contact" />
            </Routes>
          </main>
        </div>
        <Sidebar />
        <Footer />
      </Router>
    );
  }
}

export default App;
