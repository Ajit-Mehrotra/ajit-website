// components/CultureValuesSection.tsx
//import { valuesData } from '../data/values';

import LinkComponent from "../LinkComponent";


const ContactMe: React.FC = () => {
    return (
        <div className="mx-[10rem] mb-[10rem]" id="contact">
            <div className="flex flex-col xl:flex-row ">
                <div className=" w-full xl:w-1/2 flex flex-col space-y-4 p-8">
                    <h1 className="text-4xl text-center md:text-6xl font-bold mb-8">Contact Me!</h1>
                    <div className="">
                        <p className="">Email: ajitmehrotra2009@gmail.com </p>
                        <p className="">Phone: +1 (667) 231-8446</p>

                    </div>
                    <br />
                    <p className="font-bold">Links: </p>

                    <LinkComponent href="https://www.linkedin.com/in/ajit-mehrotra/" className="text-center ">
                        Linkedin
                    </LinkComponent>
                    <LinkComponent href="https://github.com/Ajit-Mehrotra" className="text-center">
                        Github
                    </LinkComponent>
                    <LinkComponent href="/resume.pdf" className="text-center">
                        Resume
                    </LinkComponent>


                </div>
                <div className="w-full xl:w-1/2 ">
                    <img src="/us.jpg" alt="Your Name" className="w-full h-64 md:h-auto object-cover rounded-lg shadow-md" />
                </div>
            </div>
        </div>
    );
}




export default ContactMe;
