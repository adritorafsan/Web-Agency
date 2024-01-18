import logo from '../assets/logo.png'
import { FaAlignJustify ,FaX } from "react-icons/fa6";
import { useState } from 'react';


const Nav = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false);
const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
}

const NavItems =[
    {link:"Overview" ,path:"home"},
    {link:"Feature" ,path:"feature"},
    {link:"About" ,path:"about"},
    {link:"Pricing" ,path:"pricing"},
   
]



  return (
   <nav className='md:px-14 p-4 mx-auto max-w-screen-2xl fixed right-0 left-0 top-0 z-50 '>
    <div className='flex justify-between container mx-auto items-center '>
        <div className='flex space-x-14 items-center '>
            <a href="" className='flex  items-center space-x-2'><img src={logo} className='h-[50px] w-[50px]' alt="" /><span className='text-2xl font-semibold text-maincolor'>CodeCraft</span></a>
            <ul className='md:flex hidden  space-x-[69px] text-[20px] '>
                {NavItems.map(({link,path}) => <a className='block text-maincolor font-[600] hover:text-gray-500 transtion duration-500' key={link} href={path} >{link}</a>)}
            </ul></div>
            <div className='hidden md:flex items-center space-x-3 ml-5'>
                <a href="#" className='text-indigo-950 text-xl font-semibold'>Language</a>
                <button className='text-indigo-950 text-xl font-semibold  w-[95px] h-[46px] bg-violet-400 rounded-md'>Sign up</button>
            </div>
            <div className='md:hidden '>
    <button onClick={toggleMenu}>{isMenuOpen ? (<FaX/>):(<FaAlignJustify/>)}</button>
    </div>
    </div>
    <ul className={`md:hidden mt-20 text-[20px] bg-background text-white rounded-md p-3 ${isMenuOpen ? "fixed right-0 left-0 top-0" : "hidden"}`}>
                {NavItems.map(({link,path}) => <a className='block   font-[600] hover:text-gray-500 transtion duration-500' key={link} href={path} >{link}</a>)}
            </ul>

   </nav>
  )
}

export default Nav