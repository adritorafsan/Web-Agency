import logo from '../assets/logo.png'
import { FaFacebookF ,  FaTwitter , FaSquareInstagram , FaYoutube } from "react-icons/fa6";



{/* <FaFacebookF />  <FaTwitter /> <FaSquareInstagram /> <FaYoutube />*/}

const Footer = () => {

  const navlinks = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },

  ]

  const helplinks = [
    { link: "How does it works?" },
    { link: "Where to ask question?" },
    { link: "How to play?" },
    { link: "What is needed for this?" },
  ];
  const contacts = [
    { link: "(012) 1234-567-890?" },
    { link: "123 CodeCraft" },
    { link: "Joyaria, Dignagor, Bangladesh" },
    { link: "01785*****" },
  ];


  return (
    <div className="md:px-14 p-4 w-full mx-auto mt-10  bg-[#010851]">
      <div className='lg:px-20 p-4 flex md:flex-row flex-col justify-between'>
        <div className='w-2/4 flex flex-col gap-8'>
          <div className='text-white flex space-x-4 items-center'>
            <img src={logo} alt="" className='h-6 w-6' /><span className='font-bold text-3xl '>CodeCraft</span>
          </div>
          <p className='font-lg md:w-2/3  text-white'>A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence.</p>
          <div className='flex sm:w-2/4 flex-col md:flex-row'>
            <input type="text" placeholder='Your email' className='p-2 bg-violet-800  rounded-xl focus:outline-none text-white ' /><input className='cursor-pointer py-2 rounded-3xl normalButton bg-violet-700' type="submit" value="Subscribe" />
          </div>
        </div>
        <div className='md:w-2/4 flex md:flex-row flex-col gap-10 items-center sm:items-start lg:justify-center sm:mt-5'>
          <div>
            <ul className='flex flex-col gap-4'>
              <h2 className='text-white text-lg'>Platform</h2>
              <div>
                {navlinks.map(({ link, path }) => <a className='block text-gray-200 hover:text-gray-300' key={link} href={path}>{link}</a>)}</div>
            </ul>
          </div>

          <div>
            <ul className='flex flex-col gap-4'>
              <h2 className='text-white text-lg'>Help</h2>
              <div>
                {helplinks.map(({ link }) => <a className='block text-gray-200 hover:text-gray-300' key={link}>{link}</a>)}
              </div>
            </ul>
          </div>

          <div>
            <ul className='flex flex-col gap-4'>
              <h2 className='text-white text-lg'>Contacts</h2>
              <div>
                {contacts.map(({ link }) => <a className='block text-gray-200 hover:text-gray-300' key={link}>{link}</a>)}
              </div>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div><h2  className='text-white'>@ CodeCraft  --- 2024. All rights reserved.</h2> </div>
          <div className='text-white flex gap-8 mt-3'>      
          <a href="https://www.facebook.com/adritorafsan" target='_blank' ><FaFacebookF className='h-7 w-7' /> </a>
          <a href="https://twitter.com/adrito_rafsan" target='_blank' > <FaTwitter  className='h-7 w-7' /> </a>
          <a href="https://www.instagram.com/adritorafsan/" target='_blank' ><FaSquareInstagram  className='h-7 w-7' /> </a>
          <a href="https://www.youtube.com/channel/UCLUlzYryKHAEEzc0X-mX6hw" target='_blank' ><FaYoutube  className='h-7 w-7' /> </a>  
        </div>  
      </div>
    </div>
  )
}

export default Footer