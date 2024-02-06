import abouttt from '../assets/Bannerimg.png'

const Newsletter = () => {
  return (
    <div className="md:px-14 px-4 max-w-screen-2xl mx-auto mt-10">
        <div className='Homebg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 flex justify-between p-4 md:flex-row flex-col '>
            <div className="flex flex-col gap-8 md:w-2/4 mb-3">
                <h2 className='lg:text-5xl md:2xl text-4xl font-semibold text-white '> <p className='lg:leading-loose'> Each student an share their <br /> discount code for friends </p></h2>
                 <p className='text-white font-semibold text-lg'>A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”</p>
                <div>
                <button className='normalButton'>I have a code</button>
                </div>
            </div>
        <div className='flex justify-center items-center'><img src={abouttt} alt="" className='lg:h-[386px] h-[346px]' /></div>
        </div>
    </div>
  )
}

export default Newsletter