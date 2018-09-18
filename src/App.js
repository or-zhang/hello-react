import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header'
import Home from './components/home'
import './App.css';
class App extends Component {
  render() {
    const user = {
      name: 'Anna',
      hobbies: ['Sports', 'Readding']
    }
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-1 col-xs-offset-11'>
            <Header/>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-1 col-xs-offset-11'>
            <h1>hello world!!</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-1 col-xs-offset-11'>
            <Home name={'marry'} age={18} user={user}>
            </Home>  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
