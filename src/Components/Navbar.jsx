import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='flex flex-row justify-between bg-orange-300 p-5'>

            <div className='flex-row flex items-center'>
                <img className='h-10 w-10 rounded-full' src="../src/assets/logo.jpeg " alt="" />
                <p className='ms-5'>School website</p>
            </div>

            <div className='flex flex-row items-center'>
                <Link to={"/"}>

                    <p>Home</p>
                </Link>
                <Link to={"/about"}>

                    <p className='ms-5'>About</p>
                </Link>
            </div>
        </nav>
    )
}
