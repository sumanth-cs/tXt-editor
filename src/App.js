import React, { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (msg, type) => {
    setalert({
      msg: msg,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 3000)
  };

  const removeBodyCls = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
  }

  const theme = (cls) => {
    removeBodyCls();
    document.body.classList.add("bg-" + cls);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("dark mode enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "success");
    }
  }
  return (
    <Router>

      <Navbar title='tXt editor' about='about' mode={mode} toggleMode={toggleMode} theme={theme} />
      <Alert alert={alert} />

      <div className="container my-5 ">

        <Routes>
          <Route exact path='/about'
            element={<About mode={mode} />} />

          <Route exact path='/' element={
            <TextForm showAlert={showAlert} heading="enter your text below:" mode={mode} />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App
