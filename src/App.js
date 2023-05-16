import './App.css';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title='Text Utils' aboutText='About us' mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/about' element = {<About/>}></Route>            
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}>
              </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
