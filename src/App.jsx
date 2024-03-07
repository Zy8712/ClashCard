import { Router, Route } from "wouter";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Generate from "./pages/Generate";
import Devlog from "./pages/DevLog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import './App.css';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/generate" component={Generate} />
        <Route path="/devlog" component={Devlog} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </Router>
    </>
  )
}

export default App;
