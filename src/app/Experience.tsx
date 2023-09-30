"use client";
import ExperienceEntry, { ExperienceEntryProps } from "./components/ExperienceEntry";
import ExperienceList from "./components/ExperienceList";
import Skills from "./Skills";


const leadershipExperiences: ExperienceEntryProps[] = [
    {
        role: "President",
        company: "Bentley Student Gaming Organization",
        timeframe: "Sept 2021 - Aug 2023",
        briefDescription: "After 2 years at Bentley, I felt disconnected and considered transferring. Post-COVID-19, the gaming organization nearly vanished. I figured if I can't find an existing community on campus, I'd create my own. We were so successful, we won Organization of the Year 2023. Take a peep at some other things we achieved! ",
        fullDescription: ['• Won Organization of the Year 2023', `• Reformulated organizations vision and strategies, recruited leadership team of 30+ student leaders, and spearheaded club growth', 'by over 400% from 90 students to over 450 students`, `• Worked with Bentley Athletics to develop Bentley’s first athletics-backed Bentley Esports program by Fall 2023`, `• Worked with celebrities, alumni, local business owners, and sponsors to better foster a sense of community and belonging`, `• Created an inclusive community culture through a series of diversity initiatives to combat industry’s culture of toxicity`],
        imageUrl: "/team.jpg",
        experienceType: "leadership"
    },
    {
        role: "Liaison",
        company: "Bentley Allocation & Internal Audit",
        timeframe: "Jan 2022 - Aug 2023",
        briefDescription: `Was a part of the board of finance in SGA. I helped manage $2.4M and made sure the money was being spent appropriately and under regulations. I had a large part in impactful DE&I and tech initiatives across campus. Read a lil about what I did!`,
        fullDescription: [`• Spearheaded and coordinated logistics for $500,000+ tech lounge project that directly involves Bentley University Presidential`, `Cabinet, Athletics, IT, Academics, Admissions, Police, SGA, and other key stakeholders such in senior administration`, `• Audited, communicated, and approved $1.6 million in organization funds, and managed rollover funds worth additional $800,000`, `• Led, proposed, and implemented innovative projects such as Adobe CC & Canva Pro for all students to improve student life`],
        imageUrl: "/team.jpg",
        experienceType: "leadership"
    },
    {
        role: "Vice President",
        company: "Bentley Streetwear Society",
        timeframe: "Sept 2021 - Dec 2022",
        briefDescription: `My friend started this club on campus and brought me on the team. Together, we grew this club to one of the largest and most popular orgs on campus. Check it out!`,
        fullDescription: [`• Coordinated club marketing, advertisement, social media identity, and grew Instagram account by over 250%`, `• Launched unique event campaigns to attract new members and delegated logistics with a team of 10`],
        imageUrl: "/team.jpg",
        experienceType: "leadership"
    },
];

const professionalExperiences: ExperienceEntryProps[] = [
    {
        role: "Software Development Intern",
        company: "FlightSquad LLC",
        timeframe: "Sept 2019 - July 2020",
        briefDescription: `Book travel in a single text message. We find the lowest fares possible and split the savings (compared to Google Fights) with you. Best flight search algorithm (avg. 30x faster time-to-booking & 15% cost savings). Unfortunately, this startup failed, but I learned a lot. Check out what I did!`,
        fullDescription: [`• Developed flight ticket aggregation and web scraping API that led to a $30,000 increase in revenue in a high-growth startup`, `• Tested, reviewed, and edited CTO’s code and organized company repositories, resulting in higher quality code and more efficient`, `programming workflows`, `• Containerized 4 microservices and helped deploy to AWS connected via SQS, increasing uptime reliability from 97% to 99.99%`],
        imageUrl: "/team.jpg",
        experienceType: "professional"
    },
    {
        role: "Founder",
        company: "Lusack Inc",
        timeframe: "Nov 2018 - Aug 2020",
        briefDescription: `Led a team of 6 to make a PC generation application that generates the optimal build for your budget, needs, and preferences.`,
        fullDescription: [`• Led and trained a 6-person team to develop, market, and release a PC part generation application for MVP launch`, `• Developed and designed a landing page using React.js and Figma, integrating Google Analytics for user tracking and insights.`, `• Integrated BestBuy, eBay, Walmart, Amazon, UserBenchMark APIs to generate 100’s of optimal PC builds based on user budget`],
        imageUrl: "/team.jpg",
        experienceType: "professional"
    },
    {
        role: "Cofounder",
        company: "Agnimurus Inc",
        timeframe: "May 2017 - March 2018",
        briefDescription: `This was basically my brother and I using our entire college savings to build cryptomining rigs when cyrpto first became a thing early in high school. Pretty sure we over 3x'd initial investment and then lost all profits when the market crashed. But it was fun losing my entire college savings I guess! `,
        fullDescription: [`• Built 12 mining rigs to mine cryptocurrency, such as Monero and Ethereum, resulting in a $12,000 increase in revenue`, `• Maintained and handled approximately $8,000 worth of mining equipment, achieving high up-time and boosting profitability.`],
        imageUrl: "/team.jpg",
        experienceType: "professional"
    },
];
const projectExperiences: ExperienceEntryProps[] = [
    {
        role: "Seagull Android Finance App",
        company: "CS 480 Group Project",
        timeframe: "Written in Java & Android Studio",
        briefDescription: "An easy finance app in android using various Google APIs",
        fullDescription: ["Relatively simple finance app. Keeps track of spendings, earnings, and also finds banks near the user's location and provides details on each bank when clicked on. Allows for calls, text, etc. as well. Pretty sure we deployed this on the Google Play Store, but am unsure if we got to that part. Honestly, I got an iPhone lol."],
        imageUrl: "/team.jpg",
        experienceType: "project",
        githubUrl: "https://github.com/Ajit-Mehrotra/Seagull-Personal-Finance-Android-App",
    },
    {
        role: "Predicting Work Life Balance Using ML/AI",
        company: "CS 399 Group Project (got carried)",
        timeframe: "Written in Python",
        briefDescription: "For CS399 Experimental ML/AI Course. Goal was to predict work-life balance levels at companies from different Employee ratings. Not gonna lie, I felt like I got carried by Kobe and Kevin, but I was there at every step of the way in-person absorbing everything I could because they're better coders than me.",
        fullDescription: [`Used NLP in data preprocessing (aside from the regular stuff). Used the following models: Decision Tree, Gaussian Naive Bayes, K-Nearest Neighbors, Logistic Regression, Random Forest Classifier`],
        imageUrl: "/team.jpg",
        experienceType: "project",
        githubUrl: "https://github.com/Ajit-Mehrotra/CS399-Project",

    },
    {
        role: "This Website",
        company: "By Yours Truly + ChatGPT",
        timeframe: "NextJS, TypeScript, Tailwind CSS",
        briefDescription: "To tell you about me. Yes, NextJS is overkill. But I might add some cool stuff here later that we collectively don't know about yet.",
        fullDescription: ["Built with NextJS (React), TypeScript, TailwindCSS, and deployed on Vercel. Made with love and by forcing ChatGPT to do labor I was too lazy to do."],
        imageUrl: "/team.jpg",
        experienceType: "project",
        githubUrl: "https://github.com/Ajit-Mehrotra/ajit-website",
    },


];

const otherExperiences: ExperienceEntryProps[] = [{
    role: "Esports Presentation",
    company: "Bentley Unviersity",
    timeframe: "Took 1 year, but was successful",
    briefDescription: "Convinced our school to make Esports a competitive sport starting Fall 2023 while simultaneously growing the gaming org to be one of the largest organizations on campus (growth of gaming at Bentley was proof of Esports' viability at Bentley). Read more about it and checkout the presentation I made!",
    fullDescription: ["First off, thank the lord it's over. The gaming organization has been around at Bentley for 20 years, but this is the first time Esports has actually become a competitive sport. Here's what I talked about in the presentation, although, I'm not sure how much it actually helped: what is esports, why it's important to bentley, demographics & psychographics, how it works, industry overview, problem & why it's important, competitive analysis, drawbacks, maturity model, and financials. "],
    imageUrl: "/team.jpg",
    experienceType: "other",
    githubUrl: "https://bentleyedu-my.sharepoint.com/:p:/g/personal/amehrotra_falcon_bentley_edu/Eca5md4ind1EgcfvbNucePUB4r-VGHHU0bnaE-SzdBzNIQ?e=wSB0Kv",

}, {
    role: "Tech Lounge Presentation",
    company: "Bentley Unviersity",
    timeframe: "In the works of being successful",
    briefDescription: "A space for students to interact with technology outside of the classroom. Currently convincing to build a tech lounge. Found some pretty glaring statistics about tech at Bentley. Read more about it and check out the relevant docuemtents we made!",
    fullDescription: [`In an increasingly technology-centric world, a significant portion of Bentley University students
    believe the institution does not provide sufficient resources to thrive. SGA’s survey revealed that 80% of
    students feel Bentley does not technologically engage them outside of academics. This sentiment is
    even stronger among technology students, where 40% believe Bentley does not provide enough
    resources for them to be successful. Disturbingly, these perceptions intensify as students advance in
    their academic journey, with technology majors and women in tech feeling the least engaged and
    prepared.
    While existing resources such as the CIS Sandbox & Mac Lab address foundational academic needs,
    they don't successfully create and sustain genuine, organic technological student engagement in a social
    context. The persistent feeling of being underprepared and disengaged, despite these resources, points
    to a discernible "technology gap."
    To bridge this gap, Bentley students propose the establishment of the Bentley Technology Lounge.
    This state-of-the-art space is designed for collaboration, exploration, and recreation. Take a deeper dive!`],
    imageUrl: "/team.jpg",
    experienceType: "other",
    githubUrl: "https://bentleyedu-my.sharepoint.com/:u:/g/personal/amehrotra_falcon_bentley_edu/Ed5S81f9i2tDnUqFVDy1KqkBbl0nuGlCglOkwZrZE9sxRA?e=w16jng",

},];

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
            <div className=" w-full mx-auto p-8 flex flex-rowmd:space-y-0 md:space-x-8  transition-all duration-300">

                <div className="group w-full hover:bg-gray-200 transition-all duration-300 rounded-lg ">
                    <h2 className="text-2xl font-light uppercase mb-6 text-center group-hover:font-bold transition-all duration-300">Other Experience</h2>
                    <ExperienceList experiences={otherExperiences} />
                </div>
            </div>
            <Skills title="Tech Skills" skills={tech_skills} />
            <Skills title="Leadership Skills" skills={leadership_skills} />

        </div>






    );
}



export default Experience;
