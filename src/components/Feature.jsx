import Featureimg from '../assets/Feature.png'

const Feature = () => {
  return (
    <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
            <div className='lg:w-1/4'>
                <h2 className='text-[40px] font-bold text-maincolor'>Why we are better than others</h2>
                <p className=' text-neutral-500 text-base font-semibold'>A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”</p>
            </div>
            <div className='w-full lg:w-3/4'>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                    <div className='bg-white  bg-opacity-5 rounded-[35px] shadow-2xl flex flex-col  items-center h-80 hover:-translate-y-4 transition-all duration-200 cursor-pointer'>
                        <img className='w-[230px] h-[149px]' src={Featureimg} alt="" />
                        <p className='px-5 text-indigo-950 lg:text-[32px] text-2xl md:text-xl font-bold'>Conventient study schedule</p>
                    </div>
                    <div className='bg-white  bg-opacity-5 rounded-[35px] lg:mt-8  shadow-2xl flex flex-col  items-center h-80 hover:-translate-y-4 transition-all duration-200 cursor-pointer'>
                        <img className='w-[230px] h-[149px]' src={Featureimg} alt="" />
                        <p className='px-5 text-indigo-950 lg:text-[32px] text-2xl md:text-xl font-bold'>Conventient study schedule</p>
                    </div>
                    <div className='bg-white  bg-opacity-5 rounded-[35px] shadow-2xl flex flex-col  items-center h-80 hover:-translate-y-4 transition-all duration-200 cursor-pointer'>
                        <img className='w-[230px] h-[149px]' src={Featureimg} alt="" />
                        <p className='text-indigo-950 lg:text-[32px] md:text-xl text-2xl font-bold px-5'>Conventient study schedule</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature