import React from 'react';
import './App.css';
import {HashRouter as Router} from 'react-router-dom';
import MyCV from './Containers/MyCV'


function App() {
  return (
    <Router>
    <div className='myApp'>
      <MyCV /> 
    </div>
    </Router>
  );
}

export default App;
