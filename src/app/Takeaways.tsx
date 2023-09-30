import Image from "next/image";
import Arrow from "./components/Arrow";

interface TakeawayProps {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
}

const takeaways: TakeawayProps[] = [
    {
        title: "THE RIGHT ANSWER",
        subtitle: "IS NOT ALWAYS THE BEST ANSWER",
        description: "I learned this at the first startup I founded, Lusack. We were actually debating what languages to use. People on my team were more familiar with one language. However, I insisted on using another language, which by most metrics have made it easier to develop and wouldn't make a difference in terms of performance. A member of my team became unegaged in the project because we didn't use the language he was familiar with and wanted to use. Looking back, I might have been right, but at the end of the day, the team suffered a huge loss in morale when he left and at the end of the day, we weren't able to finish the product in time because we lost our main backend developer. Using another programming language or stack would not have made a huge difference in the end. I learned that the right answer is not always the best answer, and you have to make decisions from a holistic standpoint. Meaning, I should take into account the technical, social, team, and business aspects of a decision. The team, being the most important, in my eyes. ",
        imageUrl: "/ajit.jpg",
    }, {
        title: "THE IMPORTANCE OF",
        subtitle: "A COLLECTIVE VISION",
        description: "I have a vision for the future of a product. You might have a slightly seperate vision of a product. Another coworker might have a seperate vision for what the product could become. At least in the early stages of a product (I only have experinece in this stage, unfortunately), if you force others to work on only your vision, you will lose out on the creativity and innovation that comes from a collective vision. In my leadership experience at BSGO, I frequently asked my coworkers what their vision was. How they wanted to improve the organization, and then I gave them the freedom to work on that. That way, they were more engaged, passionate, and didn't feel any resentment towards their work. Most of them worked much harder than they would have otherwise, me included. As a result of our differing visions, we were able to expand the org in many different areas. Now that being said, we did have a collective vision. We all sat down together. Talked about what we envisioned and created a collective understanding of what we wanted to work towards and I delegated based off of what people were most interested in/had a vision for. ",
        imageUrl: "/ajit.jpg",
    }, {
        title: "TRUST, INCLUSIVENESS, AND HAPPINESS",
        subtitle: "MAKES A TEAM",
        description: `My leadership and work style one that is informal, makes an active effort towards inclusivity, and positivity, and trust. Because I'm so informal, I say stuff that normally would not be allowed. For instance, even though I'm a leader, you'll frequently hear me saying "I'm not sure" bruh honest to god I have 0 hours of sleep if you're reading this, ima do work on this tomorrow. `,
        imageUrl: "/ajit.jpg",
    },
    {
        title: "MISTAKES",
        subtitle: "CREATE OPPORTUNITIES",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "/ajit.jpg",
    }, {
        title: "RESPECT",
        subtitle: "IS EARNED",
        description: "Here's what my org said they wanted to see in a leader: [too lazy to write this rn]",
        imageUrl: "/ajit.jpg",
    },


    // Add more takeaways as needed
];


function Takeaways() {
    return (
        <div id="takeaways">


            <h1 className=" text-center font-bold mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-[4rem]">Key Takeaways from Experience</h1>
            {/* <Arrow padding="py-[2rem]" color="text-gray-400" width={2} /> */}
            <div className="flex flex-wrap p-8 justify-center md:justify-start md:flex-row">
                {takeaways.map((takeaway, index) => (
                    <div key={index} >
                        <div className="flex flex-col lg:flex-row w-full px-[2rem]">
                            <div className={`w-full lg:w-2/5 ${index % 2 !== 0 ? 'lg:order-last' : ''} lg:pl-20 pr-3`}>
                                <h1 className="font-bold mb-0 lg:mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center sm:text-left">{takeaway.title}</h1>
                                <h2 className="text-sm md:text-xl font-semibold mt-8 text-center sm:text-left">{takeaway.subtitle}</h2>
                                <p className="mt-4 text-center lg:text-left">{takeaway.description}</p>
                            </div>
                            <div className="w-full lg:w-3/5 flex flex-col mt-4 md:mt-0">
                                <div className="h-20"></div>
                                <img className="flex-grow object-cover drop-shadow-xl rounded-xl lg:h-[50vh] lg:mx-[2rem] xl:mx-[8rem] lg:mt-[-2rem]" src={takeaway.imageUrl} alt="Takeaway image" />
                            </div>
                        </div>
                        {index !== takeaways.length - 1 && <Arrow padding="py-[1.5rem]" color="text-yellow-400" width={1} />}
                    </div>

                ))}
            </div>


        </div>


    );
}

export default Takeaways; 