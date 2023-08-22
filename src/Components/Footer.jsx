import React, { Component } from 'react'

class Footer extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div className='footer bg-black/80 py-2 px-4 text-white'>
                <ul className="footerLinks grid grid-rows-3 px-3 items-center  md:flex md:justify-around md:items-center">
                    <li>
                        <h1 className='text-xl'>Menu</h1>
                        <div className="footerLinks">
                            <ul className="footer">
                                <li className='w-fulls'>
                                    <a href="http://">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="http://">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="http://">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="http://">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="http://">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h1 className='text-xl'>Item 1</h1>
                        <div className="footerLinks">
                            <ul className="footer">
                                <li className='w-fulls'>
                                    <a href="http://">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="http://">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="http://">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="http://">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="http://">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                    <h1 className='text-xl'>Item 1</h1>
                    <div className="footerLinks">
                            <ul className="footer">
                                <li className='w-fulls'>
                                    <a href="http://">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="http://">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="http://">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="http://">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="http://">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <hr/>
                <div className="credits flex justify-center items-center px-5">
                    <div className="author">
                        <h2 className='text-center'>
                            Designed with Love by Me
                        </h2>
                    </div>
                    <div className="copyright px-2">
                        <h2 className="text-center">
                        All Rights Reserved &copy; 2023
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
