import React, { Component } from 'react'
import Top from './Top'
import Navigation from './Navigation'
class Header extends Component{
    constructor(props){
        super(props)
        // initialize states
        this.state ={

        }
    }
    //ad the render method 
    render = ()=>{
        return(
            <>
            <Top/>
            <Navigation/>
            </>
        )
    }
}

export default Header