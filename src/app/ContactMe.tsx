// components/CultureValuesSection.tsx
//import { valuesData } from '../data/values';

import Image from "next/image";
import Button from "./components/Button";
import LinkComponent from "./components/LinkComponent";


const ContactMe: React.FC = () => {
    return (
        <div className="mx-[10rem] mb-[10rem]">
            <h1 className=" text-center font-bold mb-[4rem] text-5xl md:text-6xl lg:text-7xl">Get in Touch!</h1>
            <div className="flex flex-col xl:flex-row ">
                <div className=" w-full xl:w-1/2 flex flex-col space-y-4 p-8">
                    <h1 className="text-4xl text-center md:text-6xl font-bold mb-8">Contact Me!</h1>
                    <div className=""> <p><p className="font-bold">Email: </p>ajitmehrotra2009@gmail.com</p>
                        <p><p className="font-bold">Phone:</p> +1 (667) 231-8446</p>

                    </div>
                    <br />
                    <p className="font-bold">Links: </p>

                    <LinkComponent href="https://www.linkedin.com/in/your-linkedin-profile/" className="text-center ">
                        Linkedin
                    </LinkComponent>
                    <LinkComponent href="https://www.linkedin.com/in/your-linkedin-profile/" className="text-center">
                        Github
                    </LinkComponent>
                    <LinkComponent href="https://www.linkedin.com/in/your-linkedin-profile/" className="text-center">
                        Resume
                    </LinkComponent>


                </div>
                <div className="w-full xl:w-1/2 ">
                    <Image src="ajit.jpg" alt="Your Name" className="w-full h-64 md:h-auto object-cover rounded-lg shadow-md" />
                </div>
            </div>
        </div>
    );
}




export default ContactMe;
