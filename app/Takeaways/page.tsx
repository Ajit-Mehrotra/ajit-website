import Arrow from "../components/Arrow";
import Navbar from "../components/Navbar";

interface TakeawayProps {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
}

const takeaways: TakeawayProps[] = [
    {
        title: "COLLECTIVE VISION",
        subtitle: "DRIVES INNOVATION",
        description: "Every individual brings a unique perspective to a product's potential. Especially in the early stages, where I've primarily worked, imposing a singular vision can stifle creativity and innovation. During my leadership at BSGO, I prioritized understanding each team member's vision. By granting them the autonomy to pursue their ideas, I noticed heightened engagement, passion, and dedication. This approach not only diversified our growth areas but also fostered a sense of ownership among the team. However, it's crucial to strike a balance. We convened to align our visions, ensuring we moved cohesively towards a shared goal, with tasks assigned based on individual passion and expertise. ",
        imageUrl: "/WIG.jpg",
    }, {
        title: "TRUST, INCLUSIVENESS, AND JOY",
        subtitle: "BUILDS A TEAM",
        description: `Crafting an exceptional team environment goes beyond just skills and expertise. From my experiences, the pillars of a thriving team are trust, inclusiveness, and happiness. A space that is welcoming, diverse, and open-minded fosters creativity and collaboration. Embracing an informal and forgiving atmosphere allows team members to take risks without fear of failure or of being judged by peers, leading to innovation. A dynamic environment ensures adaptability, while prioritizing happiness ensures sustained motivation and commitment. Ultimately, a team that feels valued, heard, and happy is one that consistently delivers excellence. `,
        imageUrl: "/inclusivity.jpg",
    },
    {
        title: "RESPECT",
        subtitle: "IS EARNED THROUGH ACTIONS",
        description: "In leadership, genuine respect is earned through deliberate, consistent actions. Embracing a collective vision and prioritizing trust, happiness, and inclusivity from the start set the tone for our team's success. Initial interactions, like authentic interviews, emphasized our value-driven approach, ensuring every member felt valued and respected from day one. Through this, I built a cohesive 30+ member team, each of whom I'm proud to call a friend. In the BSGO team, the top 5 most common qualities people thought a leader should have were: charisma, communication skills, passion, critical thinking skills, and authenticity.",
        imageUrl: "/team.jpg",
    },
    {
        title: "MISTAKES",
        subtitle: "CREATE OPPORTUNITIES",
        description: " I've made so many mistakes that I've started to celebrate every small thing I get right. Oddly enough, constant roadblocks became an opportunity for me to become a more positive person and celebrate small victories. In any journey, mistakes and roadblocks are inevitable. Rather than viewing them as setbacks, I've come to understand that each error provides invaluable lessons that refine our strategies and enhance our resilience. By embracing mistakes, we not only learn to adapt and innovate but also cultivate an environment where taking calculated risks is encouraged and all wins are celebrated and credited.  ",
        imageUrl: "/out-in-the-sun.jpeg",
    },
    {
        title: "THE \"RIGHT\" ANSWER",
        subtitle: "IS NOT ALWAYS THE BEST ANSWER",
        description: `At Lusack, my startup journey taught me that the optimal technical decision might not always align with the team's best interests. The experience underscored the importance of weighing decisions against their broader implications, especially on team cohesion and morale, not just the technical implications. It's essential to harmonize technical excellence with team dynamics, valuing the latter as a pivotal factor in long-term success.`,
        imageUrl: "/everyone.jpg",
    },


    // Add more takeaways as needed
];


function Takeaways() {
    return (
        <div>

            <Navbar />
            <div id="takeaways">
                <h1 className=" text-center font-bold mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-[4rem]">Key Takeaways from Experience</h1>
                <Arrow padding="" color="text-yellow-400" width={2} />
                <div className="flex flex-wrap p-8 justify-center md:justify-start md:flex-row">
                    {takeaways.map((takeaway, index) => (
                        <div id={`${index + 1}`} key={index} >
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

        </div>
    );
}

export default Takeaways; 