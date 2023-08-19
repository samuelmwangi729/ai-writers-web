import React, { Component } from 'react'
import {TfiInstagram} from 'react-icons/tfi'
import {AiOutlineMail} from 'react-icons/ai'
class Top extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div className='topbar md:flex grid grid-cols-1 w-[100%] justify-between items-center text-white md:px-2 md:h-8 font-serif transition-all duration-300'>
                <div className="topCta underline text-xl px-2 md:text-left text-center md:w-[50%] order-1">
                    <h1>
                        <a href="#">
                            Turn Creativity Into Money
                        </a>
                    </h1>
                </div>
                {/* left section here */}
                <div className="topContacts md:flex order-2 grid text-center">
                    <ul className="contactsTop flex text-center md:w-[50%] justify-center">
                        <li className="contactItem">
                            <div className="contactDetails">
                                <div className="icon">
                                    <AiOutlineMail/>
                                </div>
                                <div className="contentContact">
                                    Email
                                </div>
                            </div>
                        </li>
                        <li className="contactItem">
                            <div className="contactDetails">
                                <div className="icon">
                                    <AiOutlineMail/>
                                </div>
                                <div className="contentContact">
                                    Email
                                </div>
                            </div>
                        </li>
                        <li className="contactItem">
                            <div className="contactDetails">
                                <div className="icon">
                                    <AiOutlineMail/>
                                </div>
                                <div className="contentContact">
                                    Email
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Top
