
import LinkComponent from "../components/LinkComponent";

import Image from 'next/image'
import HobbiesSection from "../components/me/Hobbies";
import Navbar from "../components/Navbar";
import mistake from '../public/mistake.jpg'
import Gaming from "../components/me/Gaming";

function Me() {
    return (
        <div>
            <Navbar />
            <div>
                <div className="flex justify-center">
                    <Image
                        className="rounded-full w-[15rem] md:w-[20rem] lg:w-[35rem] py-[1rem]"
                        src={mistake}
                        alt="Ajit Picture"
                        priority
                    />
                </div>

                <h3 className='text-sm md:text-2xl lg:text-3xl text-center '>
                    <a className="link transition duration-300  hover:text-red-500" href="#gaming"> GAMING </a>
                    
                    <a className="link transition duration-300  hover:text-red-500" href="#shows"> SHOWS </a>
                    
                    <a className="link transition duration-300  hover:text-red-500" href="#music"> MUSIC </a>
                    
                    <a className="link transition duration-300  hover:text-red-500" href="#builds"> BUILDS </a>
                    
                    <a className="link transition duration-300  hover:text-red-500" href="#food"> FOOD </a>
                </h3>

                {/* <h1 className=' text-xl font-bold sm:text-4xl md:text-6xl lg:text-7xl text-center '>my <h1 className="inline-block text-red-500">stats</h1></h1> */}
            </div>

            <Gaming />


            <HobbiesSection />
        </div>
    );
}
export default Me;

