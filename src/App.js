import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MyCV from './Containers/MyCV'


function App() {
  return (
    <BrowserRouter>
    <div className='myApp'>
      <MyCV /> 
    </div>
    </BrowserRouter>
  );
}

export default App;
