import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize=12;
  state={
    progress:0
  }
  setProgress = (progress) => {
    this.setState({ progress });
  };
  render() {
    return (
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        />
        <Routes>
          <Route path='/' element={<News setProgress={this.setProgress} country={'in'} pageSize={this.pageSize} category={'general'}/> } />
          <Route path='/business' element={<News setProgress={this.setProgress} country={'in'} pageSize={this.pageSize} category={'business'}/> } />
          <Route path='/entertainment' element={<News setProgress={this.setProgress} country={'in'} pageSize={this.pageSize} category={'entertainment'}/> } />
          <Route path='/general' element={<News setProgress={this.setProgress} country={'in'} pageSize={this.pageSize} category={'general'}/> } />
          <Route path='/sports' element={<News setProgress={this.setProgress} country={'in'} pageSize={this.pageSize} category={'sports'}/> } />
          <Route path='/health' element={<News setProgress={this.setProgress} country={'in'} pageSize={this.pageSize} category={'health'}/> } />
          <Route path='/science' element={<News setProgress={this.setProgress} country={'in'} pageSize={this.pageSize} category={'science'}/> } />
          <Route path='/technology' element={<News setProgress={this.setProgress} country={'in'} pageSize={this.pageSize} category={'technology'}/> } />
        </Routes>
      </div> 
    )
  }
}
