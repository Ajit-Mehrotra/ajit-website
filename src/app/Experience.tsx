"use client";
import { title } from "process";
import ExperienceEntry, { ExperienceEntryProps } from "./components/ExperienceEntry";
import ExperienceList from "./components/ExperienceList";
import Project from "./components/Project";
import Skills from "./Skills";


const leadershipExperiences: ExperienceEntryProps[] = [
    {
        role: "President",
        company: "Bentley Student Gaming Organization",
        timeframe: "Sept 2021 - Aug 2023",
        briefDescription: "Reformulated organizations vision and strategies, recruited leadership team of 30+ student leaders, and spearheaded club growth by over 400% from 90 students to over 450 students",
        fullDescription:
            `• Won Organization of the Year 2023 
        • Reformulated organizations vision and strategies, recruited leadership team of 30+ student leaders, and spearheaded club growth
        by over 400% from 90 students to over 450 students
        • Worked with Bentley Athletics to develop Bentley’s first athletics-backed Bentley Esports program by Fall 2023
        • Worked with celebrities, alumni, local business owners, and sponsors to better foster a sense of community and belonging
        • Created an inclusive community culture through a series of diversity initiatives to combat industry’s culture of toxicity
        `,
        imageUrl: "/team.jpg",
        experienceType: "leadership"
    },
    {
        role: "Liaison",
        company: "Bentley Allocation & Internal Audit",
        timeframe: "Jan 2022 - Aug 2023",
        briefDescription: `Spearheaded and coordinated logistics for $500,000+ tech lounge project that directly involves Bentley University Presidential
        Cabinet, Athletics, IT, Academics, Admissions, Police, SGA, and other key stakeholders such in senior administration`,
        fullDescription: `• Spearheaded and coordinated logistics for $500,000+ tech lounge project that directly involves Bentley University Presidential
        Cabinet, Athletics, IT, Academics, Admissions, Police, SGA, and other key stakeholders such in senior administration
        • Audited, communicated, and approved $1.6 million in organization funds, and managed rollover funds worth additional $800,000
        • Led, proposed, and implemented innovative projects such as Adobe CC & Canva Pro for all students to improve student life
        `,
        imageUrl: "/team.jpg",
        experienceType: "leadership"
    },
    {
        role: "Vice President",
        company: "Bentley Streetwear Society",
        timeframe: "Sept 2021 - Dec 2022",
        briefDescription: `Coordinated club marketing, advertisement, social media identity, and grew Instagram account by over 250%`,
        fullDescription: `• Coordinated club marketing, advertisement, social media identity, and grew Instagram account by over 250%
        • Launched unique event campaigns to attract new members and delegated logistics with a team of 10`,
        imageUrl: "/team.jpg",
        experienceType: "leadership"
    },
];

const professionalExperiences: ExperienceEntryProps[] = [
    {
        role: "Software Development Intern",
        company: "FlightSquad LLC",
        timeframe: "Sept 2019 - July 2020",
        briefDescription: `• Developed flight ticket aggregation and web scraping API that led to a $30,000 increase in revenue in a high-growth startu`,
        fullDescription: `• Developed flight ticket aggregation and web scraping API that led to a $30,000 increase in revenue in a high-growth startup
        • Tested, reviewed, and edited CTO’s code and organized company repositories, resulting in higher quality code and more efficient
        programming workflows
        • Containerized 4 microservices and helped deploy to AWS connected via SQS, increasing uptime reliability from 97% to 99.99%`,
        imageUrl: "/team.jpg",
        experienceType: "professional"
    },
    {
        role: "Founder",
        company: "Lusack Inc",
        timeframe: "Nov 2018 - Aug 2020",
        briefDescription: `• Led and trained a 6-person team to develop, market, and release a PC part generation application for MVP launch`,
        fullDescription: `• Led and trained a 6-person team to develop, market, and release a PC part generation application for MVP launch
        • Developed and designed a landing page using React.js and Figma, integrating Google Analytics for user tracking and insights.
        • Integrated BestBuy, eBay, Walmart, Amazon, UserBenchMark APIs to generate 100’s of optimal PC builds based on user budget`,
        imageUrl: "/team.jpg",
        experienceType: "professional"
    },
    {
        role: "Cofounder",
        company: "Agnimurus Inc",
        timeframe: "May 2017 - March 2018",
        briefDescription: `• Built 12 mining rigs to mine cryptocurrency, such as Monero and Ethereum, resulting in a $12,000 increase in revenue`,
        fullDescription: `• Built 12 mining rigs to mine cryptocurrency, such as Monero and Ethereum, resulting in a $12,000 increase in revenue
        • Maintained and handled approximately $8,000 worth of mining equipment, achieving high up-time and boosting profitability.`,
        imageUrl: "/team.jpg",
        experienceType: "professional"
    },
];
const projectExperiences: ExperienceEntryProps[] = [
    {
        role: "This Website",
        company: "By Yours Truly + ChatGPT",
        timeframe: "Deployed without finishing",
        briefDescription: "To tell you about me",
        fullDescription: "Built with NextJS (React), TypeScript, TailwindCSS, and deployed on Vercel. Made with love and by forcing ChatGPT to do labor I was too lazy to do.",
        imageUrl: "/team.jpg",
        experienceType: "project"
    },
    {
        role: "AI Group Project",
        company: "CS399 Experimental ML/AI Course",
        timeframe: "Fall 2022",
        briefDescription: "Predicting Work Life Balance",
        fullDescription: ` too lazy to write everything but here&apos;s some models we used. I&apos;ll come back to this eventually and actualy write and link stuff. ├── dt.pkl (Decision Tree)
        │   ├── gaussian.pkl (Gaussian Naive Bayes)
        |   ├── knn.pkl (K-Nearest Neighbors)
        |   ├── logit_reg.pkl (Logistic Regression)
        |   └── rfc.pkl (Random Forest Classifier)`,
        imageUrl: "/team.jpg",
        experienceType: "project"

    },
    {
        role: "Android Finance App",
        company: "Bentley Unviersity",
        timeframe: "Spring 2023",
        briefDescription: "An easy finance app in android using various Google APIs",
        fullDescription: "Shoutout google for deprecating something shortly after making it. Again, will come back. Just look at my Github.",
        imageUrl: "/team.jpg",
        experienceType: "project"
    },
    {
        role: "Esports & Tech Lounge Presentation",
        company: "Bentley Unviersity",
        timeframe: "I will never work as a University as long as I live",
        briefDescription: "Convinced our school to make Esports a competitive sport. Currently convincing to build a tech lounge (so much pain)",
        fullDescription: "If you&apos;re seeing this, you saw the website too soon. I swear to god. Check it next morning and it wil be done. ",
        imageUrl: "/team.jpg",
        experienceType: "project"
    },
];

const tech_skills: Skills[] = [
    { name: 'Python', level: 80 },
    { name: 'Java', level: 70 },
    { name: 'SQL', level: 75 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'React.js', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Tailwind CSS', level: 70 },
];
const leadership_skills: Skills[] = [
    {
        name: 'Critical and Strategic Thinking',
        level: 70
    },
    { name: 'Inclusivity', level: 80 },
    { name: 'Communication', level: 90 },
    { name: 'Adaptability', level: 80 },
    { name: 'Agile Methodologies', level: 80 },
    { name: 'Listening', level: 90 },
];

function Experience() {

    return (
        <div id='experience'>
            <h1 className=" text-center font-bold mb-6 text-5xl md:text-6xl lg:text-7xl">My Experience</h1>

            <div className=" w-full mx-auto p-8 flex flex-col xl:flex-row justify-around space-y-8 md:space-y-0 md:space-x-8  transition-all duration-300">

                <div className="group w-full xl:w-1/3 p-2 hover:bg-gray-200 transition-all duration-300 rounded-lg ">
                    <h2 className="text-2xl font-light uppercase mb-6 text-center group-hover:font-bold transition-all duration-300">Leadership Experience</h2>
                    <ExperienceList experiences={leadershipExperiences} />
                </div>
                <div className="group w-full xl:w-1/3 p-2 hover:bg-gray-200 transition-all duration-300 rounded-lg ">
                    <h2 className="text-2xl font-light uppercase mb-6 text-center group-hover:font-bold transition-all duration-300">Professional Experience</h2>
                    <ExperienceList experiences={professionalExperiences} />
                </div>
                <div className="group w-full xl:w-1/3 p-2 hover:bg-gray-200 transition-all duration-300 rounded-lg ">
                    <h2 className="text-2xl font-light uppercase mb-6 text-center group-hover:font-bold transition-all duration-300">Project Experience</h2>
                    <ExperienceList experiences={projectExperiences} />
                </div>
            </div>
            <p>bug here I&apos;m aware. will fix tomorrow.</p>
            <Skills title="Tech Skills" skills={tech_skills} />
            <Skills title="Leadership Skills" skills={leadership_skills} />

        </div>






    );
}



export default Experience;

