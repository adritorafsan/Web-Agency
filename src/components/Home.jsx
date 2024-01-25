import bannerImg from '../assets/Bannerimg.png'


const Home = () => {
  const HomeHeading ="Develop your skills \n without diligence"
  const HomeP = "A good example of a paragraph contains a topic sentence, details and a \nconclusion. There are many different kinds of animals that live in China."
  return (
   <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
   <div className='Homebg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
    <div className='flex flex-col justify-between items-center gap-2 md:gap-10 md:flex-row-reverse'>
      <div><img src={bannerImg} alt="" className='lg:h-[386px] h-[346px]' /></div>
      <div className='text-white md:w-3/5 flex flex-col  md:gap-10'>
        <h2 className='md:text-7xl text-4xl  font-bold leading-relaxed'>{HomeHeading}</h2>
        <div className='flex flex-col gap-3'>
        <p className='font-medium md:text-xl text-gray-200'>{HomeP}</p>
        <div className='flex gap-3'>
          <button className='normalButton '>Get Started</button>
          <button className='normalButton'>Discount</button>
        </div></div>
      </div>
    </div>
   </div>
   </div>
  )
}

export default Home