import React, { Component } from 'react'
import Logo from '../Assets/logo.png'
import {TfiSearch}  from 'react-icons/tfi'
import {AiOutlineMenu}  from 'react-icons/ai'
class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div className='navigation w-[100%] h-[60px] md:flex items-center justify-between px-2 md:bg-black lg:bg-green-500 xl:bg-gray-700 relative'>
                <div className="brand pr-5">
                    <a href='#'>
                        <img src={Logo} className='lg:w-[250px] md:w-[200px]'/>
                    </a>
                </div>
                <div className="search">
                    <form>
                        <div className="InputGroup flex items-center">
                            <select className='border-l-2 px-2 border-t-2 border-b-2 h-[30px] xl:w-[130px] lg:w-[130px] md:w-[100px] rounded-tl-3xl rounded-bl-3xl focus:outline-none'>
                                <option label="--select field" className='optionText'></option>
                            </select> 
                            <input type="text" placeholder='Search Here...' className='xl:w-[250px] lg:w-[300px] md:w-[200px] border-l-2 px-2 border-t-2 border-b-2 h-[30px] focus:outline-none' />
                            <button className='w-[50px] border-r-2 px-2 border-t-2 border-b-2 h-[30px] rounded-tr-3xl rounded-br-3xl'>
                                <span className='font-bold'>
                                    <TfiSearch size={20} color='orange' className='font-bold'/>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="links pr-3 lg:hidden xl:flex md:hidden hidden">
                   <ul className='flex items-center pr-2'>
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
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                   </ul>
                </div>
                <div className="buttons whitespace-nowrap">
                    <button className='bg-orange-600 px-2 py-1 mr-3 text-white'>Sign Up</button>
                    <button className='bg-[var(--primary-color)] px-2 py-1 mr-3 text-white'>Sign In</button>
                </div>
                <div className="mobileMenu hidden lg:block md:block text-white">
                    <AiOutlineMenu size={30}/>
                </div>
            </div>
        )
    }
}

export default Navigation
