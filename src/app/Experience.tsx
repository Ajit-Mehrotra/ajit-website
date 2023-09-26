"use client";
import ExperienceEntry, { ExperienceEntryProps } from "./components/ExperienceEntry";
import ExperienceList from "./components/ExperienceList";
import Project from "./components/Project";
import Skills from "./components/Skills";


const leadershipExperiences: ExperienceEntryProps[] = [
    {
        role: "Software Engineer 1",
        company: "ABC Corp",
        timeframe: "Jan 2020 - Present",
        briefDescription: "Developed several high-impact projects...",
        fullDescription: "Detailed description of the role and projects...",
        imageUrl: "/team.jpg",
        experienceType: "leadership"
    },
    {
        role: "Software Engineer 2",
        company: "ABC Corp",
        timeframe: "Jan 2020 - Present",
        briefDescription: "Developed several high-impact projects...",
        fullDescription: "Detailed description of the role and projects...",
        imageUrl: "/team.jpg",
        experienceType: "leadership"
    },
    {
        role: "Software Engineer 3",
        company: "ABC Corp",
        timeframe: "Jan 2020 - Present",
        briefDescription: "Developed several high-impact projects...",
        fullDescription: "Detailed description of the role and projects...",
        imageUrl: "/team.jpg",
        experienceType: "leadership"
    },
];

const professionalExperiences: ExperienceEntryProps[] = [
    {
        role: "Software Engineer 1",
        company: "ABC Corp",
        timeframe: "Jan 2020 - Present",
        briefDescription: "Developed several high-impact projects...",
        fullDescription: "Detailed description of the role and projects...",
        imageUrl: "/team.jpg",
        experienceType: "professional"
    },
    {
        role: "Software Engineer 2",
        company: "ABC Corp",
        timeframe: "Jan 2020 - Present",
        briefDescription: "Developed several high-impact projects...",
        fullDescription: "Detailed description of the role and projects...",
        imageUrl: "/team.jpg",
        experienceType: "professional"
    },
    {
        role: "Software Engineer 3",
        company: "ABC Corp",
        timeframe: "Jan 2020 - Present",
        briefDescription: "Developed several high-impact projects...",
        fullDescription: "Detailed description of the role and projects...",
        imageUrl: "/team.jpg",
        experienceType: "professional"
    },
];
const projectExperiences: ExperienceEntryProps[] = [
    {
        role: "Software Engineer 1",
        company: "ABC Corp",
        timeframe: "Jan 2020 - Present",
        briefDescription: "Developed several high-impact projects...",
        fullDescription: "Detailed description of the role and projects...",
        imageUrl: "/team.jpg",
        experienceType: "project"
    },
    {
        role: "Software Engineer 2",
        company: "ABC Corp",
        timeframe: "Jan 2020 - Present",
        briefDescription: "Developed several high-impact projects...",
        fullDescription: "Detailed description of the role and projects...",
        imageUrl: "/team.jpg",
        experienceType: "project"

    },
    {
        role: "Software Engineer 3",
        company: "ABC Corp",
        timeframe: "Jan 2020 - Present",
        briefDescription: "Developed several high-impact projects...",
        fullDescription: "Detailed description of the role and projects...",
        imageUrl: "/team.jpg",
        experienceType: "project"
    },
];

const tech_skills = [
    'Python',
    'Java',
    'SQL',
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
];
const leadership_skills = [
    'Critical and Strategic Thinking', 'Inclusivity', 'Communication', 'Adaptability', 'Agile Methodologies', 'Listening',
];

function Experience() {

    return (
        <div>
            <h1 className=" text-center font-bold mb-6 sm:text-5xl md:text-6xl lg:text-7xl">My Experience</h1>

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
            <Skills title="Tech Skills" skills={tech_skills} />
            <Skills title="Leadership Skills" skills={leadership_skills} />

        </div>






    );
}



export default Experience;

