import { Router, Route } from "wouter";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import Insights from "./pages/Insights";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Devlog from "./pages/DevLog";
import Footer from "./components/Footer";

import './App.css';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" component={Home} />
        <Route path="/generate" component={Generate} />
        <Route path="/insights" component={Insights} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact" component={Contact} />
        <Route path="/devlog" component={Devlog} />
        <Footer />
      </Router>
    </>
  )
}

export default App;
