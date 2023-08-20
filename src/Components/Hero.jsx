import React, { Component } from 'react'
import {AiFillDollarCircle,AiOutlineUser,AiOutlineDollar} from 'react-icons/ai'
import {BiStopwatch,BiSolidCheckCircle,BiHeadphone} from 'react-icons/bi'
class Hero extends Component{
    constructor(props){
        super(props)
        this.state={
            //states goes here 
        }
    }

    render =()=>{
        return(
            <>
                <div className="hero mb-6">
                    <h2 className='py-4 text-3xl font-semibold text-center bg-[var(--primary-color)] text-white'>
                        Our Benefits
                    </h2>
                    <ul className="benefits duration-200">
                        <li className="benefitList order-1">
                            <div className="benefitDescription">
                                <div className="benIcon">
                                    <AiOutlineDollar size={60}/>
                                </div>
                                <div className="benContent">
                                    No registration Fees
                                </div>
                            </div>
                        </li>
                        <li className="benefitList order-2">
                            <div className="benefitDescription">
                                <div className="benIcon">
                                    <BiStopwatch size={60}/>
                                </div>
                                <div className="benContent">
                                    Ultra Fast Delivery
                                </div>
                            </div>
                        </li>
                        <li className="benefitList order-3">
                            <div className="benefitDescription flex flex-col justify-around items-center">
                                <div className="benIcon">
                                    <AiOutlineUser size={60}/>
                                </div>
                                <div className="benContent">
                                    Better Writers
                                </div>
                            </div>
                        </li>
                        <li className="benefitList order-4">
                            <div className="benefitDescription">
                                <div className="benIcon">
                                    <AiFillDollarCircle size={60}/>
                                </div>
                                <div className="benContent">
                                    On time Payments
                                </div>
                            </div>
                        </li>
                        <li className="benefitList order-5">
                            <div className="benefitDescription">
                                <div className="benIcon">
                                    <BiSolidCheckCircle size={60}/>
                                </div>
                                <div className="benContent">
                                    Timely Payments To Writers
                                </div>
                            </div>
                        </li>
                        <li className="benefitList order-5">
                            <div className="benefitDescription">
                                <div className="benIcon">
                                    <BiHeadphone size={60}/>
                                </div>
                                <div className="benContent">
                                    24/7 Support to All
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}
export default Hero