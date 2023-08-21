import React, { Component } from 'react'
import {Header,Slider,Hero,Projects,Footer} from './Components'
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
        <Footer/>
      </div>
    )
  }
}

export default App
