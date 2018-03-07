import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'
import Age from 'components/age/Age'
import Result from 'components/result/Result'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Would I still be alive?</h1>
        </header>
        <div className="App-intro">
          <Age/>
          <Result/>
        </div>
      </div>
    )
  }
}

export default App
