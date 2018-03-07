import React, { Component } from 'react'

import './App.css'
import Age from 'components/age/Age'
import Result from 'components/result/Result'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Would I still be alive?</h1>
        </header>
        <div className="app-core">
          <Age/>
          <Result/>
        </div>
      </div>
    )
  }
}

export default App
