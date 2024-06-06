
import LinkComponent from "../LinkComponent";
import Image from 'next/image'

function Description() {
    return (
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
            <h3 className='text-sm md:text-2xl lg:text-3xl text-center '>A LITTLE ABOUT</h3>
            <h1 className=' text-xl font-bold sm:text-4xl md:text-6xl lg:text-7xl text-center '>AJIT MEHROTRA</h1>

            <p className="px-[4rem] md:px-[6rem] lg:px-[20rem] sm:pt-[1rem] py-[2rem]">
                I&apos;m a recent graudate from {" "}
                <LinkComponent href="https://www.bentley.edu/">
                    Bentley University
                </LinkComponent>{" "}
                with a background in application development and leadership. Fun fact about me is that I studyied abroad at{" "}
                <LinkComponent href="https://www.bentley.edu/">
                    Nanyang Technological University (NTU)
                </LinkComponent>{" "}
                in Singpaore in Fall 2023.
                <br />
                <br />
                In the past, I&apos;ve worked at 3 startups. One for a software development
                internship, and the other two I helped found. All three startups failed,
                but I learned so much and met some really cool people!
                <br />
                <br />
                At Bentley U, I had the privilege of leading many successful teams and
                initiatives that had significant, visible impacts on campus, and I had
                the reputation of a proven leader with measurable results.
                <br />
                <br />
                Check out my work, takeaways, values, and hobbies below!{" "}
            </p>
        </div>
    );
}
export default Description;

