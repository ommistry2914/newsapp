import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state= {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />

        <Routes>
          <Route path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key='general' pageSize={12} country='us' category='general'/>}></Route>
          <Route path='/business' element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key='business'pageSize={12} country='in' category='business'/>}></Route>
          <Route path='/entertainment' element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key='entertainment'pageSize={12} country='in' category='entertainment'/>}></Route>
          <Route path='/health' element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  key='health'pageSize={12} country='in' category='health'/>}></Route>
          <Route path='/science' element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key='science'pageSize={12} country='in' category='science'/>}></Route>
          <Route path='/sport' element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  key='sport'pageSize={12} country='in' category='sport'/>}></Route>
          <Route path='/technology' element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key='technology'pageSize={12} country='in' category='technology'/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
