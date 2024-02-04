import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'

const About = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-24">
            <div className='flex flex-col lg:flex-row-reverse justify-between items-start lg:items-center md:gap-10 gap-4'>
                <div className='w-full md:w-2/4 space-y-5'>
                    <h2 className='  text-maincolor leading-relaxed font-bold text-xl  md:text-4xl'>We have been improving our product <span className='text-[#9A7AF1]'>for many years.</span> </h2>
                    <p className='text-neutral-500 text-2xl font-medium'>A good example of a paragraph contains a topic conclusion. 'There are many different kinds of animals that live in China.</p>
                    <button className="normalButton ">Get Started</button>
                </div>
                <div className='w-full md:w-2/4 mx-auto'><img src={about1} alt="" /></div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row-reverse justify-between items-start lg:items-center md:gap-10 gap-4'>
                <div className='w-full md:w-2/4 mx-auto'><img src={about2} alt="" /></div>
                <div className='w-full md:w-2/4 space-y-5'>
                    <h2 className='   text-maincolor leading-relaxed font-bold  md:text-4xl text-xl'>You can Practice at any You <span className='ml-2  text-[#9A7AF1]'>can Practice at any
                        time convinent for you.</span> </h2>
                    <p className='text-neutral-500 text-2xl font-medium'>A good example of a paragraph contains a topic conclusion. 'There are many different kinds of animals that live in China.</p>
                    <button className="normalButton ">Get Started</button>
                </div>

            </div>
        </div>
    )
}

export default About