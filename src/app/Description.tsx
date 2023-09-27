
import LinkComponent from "./components/LinkComponent";

function Description() {
    return (
        <div>

            <p className="px-[4rem] md:px-[6rem] lg:px-[20rem] sm:pt-[1rem] py-[2rem]">
                I'm a senior at{" "}
                <LinkComponent href="https://www.bentley.edu/">
                    Bentley University
                </LinkComponent>{" "}
                with a background in application development and leadership and am
                currently studying abroad at{" "}
                <LinkComponent href="https://www.bentley.edu/">
                    Nanyang Technological University (NTU)
                </LinkComponent>{" "}
                in Singpaore.
                <br />
                <br />
                In the past, I've worked at 3 startups. One for a software development
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

