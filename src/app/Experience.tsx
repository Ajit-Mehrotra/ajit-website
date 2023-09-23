"use client";
import ExperienceEntry, { ExperienceEntryProps } from "./components/ExperienceEntry";
import ExperienceList from "./components/ExperienceList";
import Project from "./components/Project";


const experiences: ExperienceEntryProps[] = [
    {
        role: "Software Engineer 1",
        company: "ABC Corp",
        timeframe: "Jan 2020 - Present",
        briefDescription: "Developed several high-impact projects...",
        fullDescription: "Detailed description of the role and projects...",
        imageUrl: "/team.jpg"
    },
    {
        role: "Software Engineer 2",
        company: "ABC Corp",
        timeframe: "Jan 2020 - Present",
        briefDescription: "Developed several high-impact projects...",
        fullDescription: "Detailed description of the role and projects...",
        imageUrl: "/team.jpg"
    },
    {
        role: "Software Engineer 3",
        company: "ABC Corp",
        timeframe: "Jan 2020 - Present",
        briefDescription: "Developed several high-impact projects...",
        fullDescription: "Detailed description of the role and projects...",
        imageUrl: "/team.jpg"
    },
];

function Experience() {
    return (
        <div className="max-w-2xl mx-auto p-8">
            <h2 className="text-2xl font-bold mb-6">Professional Experiences</h2>
            {/* <ExperienceEntry
                role="Software Engineer"
                company="ABC Corp"
                timeframe="Jan 2020 - Present"
                briefDescription="Developed several high-impact projects..."
                fullDescription="Detailed description of the role and projects..."
                imageUrl="/team.jpg"
            /> */}

            <ExperienceList experiences={experiences} />
            {/* Add more ExperienceEntry components as needed */}
        </div>
    );
}
export default Experience;

