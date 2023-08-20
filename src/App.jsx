import React, { Component } from 'react'
import {Header,Slider,Hero} from './Components'
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
        <Hero/>
      </div>
    )
  }
}

export default App
