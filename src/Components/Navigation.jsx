import React, { Component } from 'react'
import Logo from '../Assets/logo.png'
import {AiOutlineMenu,AiOutlineClose}  from 'react-icons/ai'
class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {
             nav:false
        }
        this.setVisible = this.setVisible.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
    }
    setVisible = ()=>{
        this.setState({nav:!this.state.nav})
    }
    closeMenu = () =>{
        this.setState({
            nav:!this.state.nav
        })
    }
    render() {
        return (
            <div className='navigation flex justify-between px-1 items-center transition-all duration-150 relative fixed'>
                <div className="brand">
                    <a href='#'>
                        <img src={Logo} className='w-[200px] md:w-[250px]'/>
                    </a>
                </div>
                <div className="links hidden md:hidden lg:flex">
                   <ul className='flex items-center justify-between gap-1'>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">How It Works</a>
                    </li>
                   </ul>
                </div>
                <div className="buttons transition-all duration-200 flex">
                    <button className='bg-[var(--primary-color)] text-white px-4 mr-2 whitespace-nowrap'>Sign In</button>
                    <button className='bg-orange-500 text-white px-4 whitespace-nowrap'>Sign Up</button>
                </div>
                <div className="mobileMenu text-black block lg:hidden">
                    {this.state.nav? <AiOutlineClose size={30} onClick={this.closeMenu}/>:<AiOutlineMenu size={30} onClick={this.setVisible}/> }
                     
                </div>
                {/* overloay */}
                <div className={this.state.nav?'lg:hidden overlay bg-black/80 w-full h-screen top-[100%] left-0 absolute z-100 duration-300':'hidden'}>
                    <div className={this.state.nav ? 'lg:hidden absolute mobileLinks absolute z-1001 top-[0] right-2 h-[fit-content] bg-[var(--primary-color)] transition duration-300': 'hidden'}>
                    <ul className='flex items-left justify-between flex-col text-white'>
                        <li>
                            <a href="#">About</a>
                        
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">How It Works</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation
