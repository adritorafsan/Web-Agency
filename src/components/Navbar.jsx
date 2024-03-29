import { useState } from 'react';
import logo from '../assets/logo.png'
import { FaAlignJustify, FaX } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Navbar = () => {

    const [isMenuOpen,setIsMesnuOpen] = useState(false);

    
    const toggleMenu =() =>{
        setIsMesnuOpen(!isMenuOpen)
    }

    const navlinks = [
        { link: "Overview", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "about" },
        { link: "Pricing", path: "pricing" },

    ]
    const language = "Language";

    return (
        <>
            <nav className=' bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-maincolor fixed z-50 top-0 left-0 right-0 border-b'>
                <div className='container mx-auto flex justify-between items-center font-medium'>
                    <div className='flex space-x-12 items-center'>
                        <a className='text-2xl text-maincolor font-semibold flex items-center space-x-3 ' href="/"><img className='w-10 inline-block' src={logo} alt="" /><span>CodeCraft</span></a>
                        <ul className='md:flex space-x-12 hidden'>
                            {navlinks.map(({ link, path }) => <Link activeClass='active' spy={true} smooth={true} offset={-100} className='block  hover:text-gray-300 cursor-pointer' key={link} to={path}>{link}</Link>)}
                        </ul>
                    </div>
                    <div className='space-x-4 hidden md:flex items-center'>
                        <a href="/" className='text-maincolor text-[20px] font-semibold'>{language}</a>
                        <button className='h-[46px] w-[95px] rounded-md p-3 bg-background text-xl font-semibold'>Sign up</button>
                    </div>

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none focus:text-gray-700'>{
                            isMenuOpen ? (<FaX/>) : ( <FaAlignJustify />)
                        }</button>
                    </div>
                </div>
            </nav>
            <div className={`md:hidden space-y-4 px-4 pt-24 pb-5 bg-background ${ isMenuOpen ? "block fixed top-0 left-0 right-0" :"hidden"}`}>
            {navlinks.map(({ link, path }) => <Link activeClass='active' spy={true} smooth={true} onClick={toggleMenu} className='block text-white hover:text-gray-300 cursor-pointer' key={link} to={path}>{link}</Link>)}
            </div> 

            </>
    )
}

export default Navbar