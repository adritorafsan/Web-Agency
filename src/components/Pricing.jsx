import { useState } from "react"
import { FaArrowRight } from "react-icons/fa6";


const Pricing = () => {
    const [IsYearly,setIsYearly] =useState(false);

    const packages =[
        {name:"Start", monthlyprice:"50" ,yearlyprice:"99" ,description:"A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name:"Advance", monthlyprice:"85" ,yearlyprice:"199" ,description:"A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name:"Premium", monthlyprice:"99" ,yearlyprice:"499" ,description:"A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit."},


    ]

    return (
        <div className="md:px-14 p-4 mx-auto py-10 max-w-screen-2xl">
            <div className="text-center ">
                <h2 className="md:text-5xl text-2xl text-maincolor font-extrabold mb-2">Here are all our plans</h2>
                <p className="text-lg text-gray-400 md:w-2/4 mx-auto">A simple paragraph is comprised of three major components. The which is often a declarative sentence.</p>
                <div>
                    <label htmlFor="toggle" className="inline-flex items-center mt-12 cursor-pointer"> 
                        <span className="mr-8 text-2xl font-semibold ">Monthly</span>
                        <div className="h-8 w-16 rounded-full bg-gray-400 ">
                            <div className={`w-8 h-8 rounded-full transition-all ease-out duration-200 ${IsYearly ? "bg-violet-500 ml-8" : "bg-gray-800"}`}></div>
                        </div>
                        <span className="ml-8 text-2xl font-semibold ">Yearly</span>
                    </label>
                    <input type="checkbox"  id="toggle" className="hidden" checked ={IsYearly} onChange={ () => setIsYearly(!IsYearly)} />
                </div>
            </div>
            {/* Pricing Card */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto my-3 ">
            {packages.map((pkg,index) => <div key={index} className="border rounded-lg md:px-6 px-4 py-10 cursor-pointer transition-all scale-[1] hover:scale-[1.02] duration-300 shadow-xl"> 
                <h3 className="text-3xl text-maincolor font-bold text-center">{pkg.name}</h3>
                <p className="text-lg text-gray-600 font-semibold text-center">{pkg.description}</p>
                <p className="text-violet-500 text-4xl font-bold mt-5 text-center">
                     {IsYearly ? `$${pkg.yearlyprice}` :`$${pkg.monthlyprice} `}<span className="text-gray-600 text-lg font-semibold">/{IsYearly ? "Year" :"Month"}</span>
                </p>
                <ul className="space-y-2 mt-3">
                    <li className="flex space-x-2 text-md font-semibold text-maincolor items-center"><FaArrowRight /> <p> Videos of Lessons</p></li>
                    <li className="flex space-x-2 text-md font-semibold text-maincolor items-center"><FaArrowRight /> <p> Homework check</p></li>
                    <li className="flex space-x-2 text-md font-semibold text-maincolor items-center"><FaArrowRight /> <p>Additional practical task</p></li>
                    <li className="flex space-x-2 text-md font-semibold text-maincolor items-center"><FaArrowRight /> <p> Monthly conferences </p></li>
                    <li className="flex space-x-2 text-md font-semibold text-maincolor items-center"><FaArrowRight /> <p> Personal advice from teachers</p></li>             
                </ul>
                <div className="w-full mx-auto mt-5 flex items-center justify-center">
                <button className="normalButton">Get started</button>
                </div>
            </div>)}
        </div>

        </div>
    )
}

export default Pricing