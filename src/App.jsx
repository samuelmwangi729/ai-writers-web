import React, { Component } from 'react'
import {Header,Slider} from './Components'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
       
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Slider/>
      </div>
    )
  }
}

export default App
