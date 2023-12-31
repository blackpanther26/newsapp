import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<News country={'in'} pageSize={12} category={'general'}/> } />
          <Route path='/business' element={<News country={'in'} pageSize={12} category={'business'}/> } />
          <Route path='/entertainment' element={<News country={'in'} pageSize={12} category={'entertainment'}/> } />
          <Route path='/general' element={<News country={'in'} pageSize={12} category={'general'}/> } />
          <Route path='/sports' element={<News country={'in'} pageSize={12} category={'sports'}/> } />
          <Route path='/health' element={<News country={'in'} pageSize={12} category={'health'}/> } />
          <Route path='/science' element={<News country={'in'} pageSize={12} category={'science'}/> } />
          <Route path='/technology' element={<News country={'in'} pageSize={12} category={'technology'}/> } />
        </Routes>
      </div> 
    )
  }
}
