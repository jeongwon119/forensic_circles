import React from 'react'
import { Link  } from 'react-router-dom'
import * as $ from 'jquery'

function Navbar() {
    return (
        <>
            <div className="w-full h-[9%] flex items-center space-x-[5%] justify-end pr-[2%] relative">
                <div className="absolute left-[1%]">
                    <svg className="visible md:invisible hover:cursor-pointer" width="58" height="54" viewBox="0 0 58 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M51.2031 8.4375H6.79688C6.54766 8.4375 6.34375 8.62734 6.34375 8.85938V12.2344C6.34375 12.4664 6.54766 12.6562 6.79688 12.6562H51.2031C51.4523 12.6562 51.6562 12.4664 51.6562 12.2344V8.85938C51.6562 8.62734 51.4523 8.4375 51.2031 8.4375ZM51.2031 41.3438H6.79688C6.54766 41.3438 6.34375 41.5336 6.34375 41.7656V45.1406C6.34375 45.3727 6.54766 45.5625 6.79688 45.5625H51.2031C51.4523 45.5625 51.6562 45.3727 51.6562 45.1406V41.7656C51.6562 41.5336 51.4523 41.3438 51.2031 41.3438ZM51.2031 24.8906H6.79688C6.54766 24.8906 6.34375 25.0805 6.34375 25.3125V28.6875C6.34375 28.9195 6.54766 29.1094 6.79688 29.1094H51.2031C51.4523 29.1094 51.6562 28.9195 51.6562 28.6875V25.3125C51.6562 25.0805 51.4523 24.8906 51.2031 24.8906Z" fill="white"/>
                    </svg>
                </div>
                <div className="text-white font-bold text-[28px] invisible md:visible">
                    <Link to="/home">Home</Link>
                </div>
                <div className="text-white font-bold text-[28px] invisible md:visible">
                    <Link to="/about">About</Link>
                </div>
                <div className="text-white font-bold text-[28px] invisible md:visible">
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="text-white font-bold text-[28px]">
                    <Link to="/auth/login"><button className="w-[144px] h-[56px] rounded-full text-white border-[5px] text-[28px] font-bold">로그인</button></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar