import React from 'react';
import './App.css';
import Filter from './Filter';
import PostData from './PostData/PostData';
import Navbar from './Navbar';
import {Route} from 'react-router-dom'



function App() {


  return (
    <div className="App">
    <Navbar/>
    
    <Route exact path='/' component={Filter}/>
    <Route path='/jsondata' component={PostData }/>
    
    </div>
  );
}

export default App;
