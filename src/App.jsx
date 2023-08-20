import React, { Component } from 'react'
import {Header,Slider,Hero,Projects} from './Components'
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
        <Projects/>
      </div>
    )
  }
}

export default App
