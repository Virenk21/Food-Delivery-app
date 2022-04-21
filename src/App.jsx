import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Cart from './Pages/Cart';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
         <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/Cart" element={<Cart/>}/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
