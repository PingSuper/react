import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import { Fragment } from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/ContactState';

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <div className="App">
            <Navbar />
            <div className="container">
              <Routes>
                <Route extact path="/" Component={Home} />
                <Route extact path="/about" Component={About} />
              </Routes>
            </div>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
};

export default App;
