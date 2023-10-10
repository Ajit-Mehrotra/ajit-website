
import LinkComponent from "../components/LinkComponent";

import Image from 'next/image'
import HobbiesSection from "../components/me/Hobbies";
import Navbar from "../components/Navbar";

function Me() {
    return (
        <div>
            <Navbar />
            <div>
                <div className="flex justify-center">
                    <Image
                        className="rounded-full w-[15rem] md:w-[20rem] lg:w-[35rem] py-[1rem]"
                        src="/ajit.jpg"
                        alt="Ajit Picture"
                        width={1000}
                        height={1000}
                        priority
                    />
                </div>
                <h3 className='text-sm md:text-2xl lg:text-3xl text-center '>GAMING  MUSIC  BUILDING  FOOD</h3>
                <h1 className=' text-xl font-bold sm:text-4xl md:text-6xl lg:text-7xl text-center '>stats</h1>
            </div>
            <HobbiesSection />
        </div>
    );
}
export default Me;

