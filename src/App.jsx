import { Router, Route } from "wouter";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import './App.css';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" component={Home} />
      </Router>
    </>
  )
}

export default App;
