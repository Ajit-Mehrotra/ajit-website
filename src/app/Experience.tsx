"use client";
import ExperienceEntry from "./components/ExperienceEntry";
import Project from "./components/Project";



function Experience() {
    return (
        <div className="max-w-2xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <ExperienceEntry
          role="Software Engineer"
          company="ABC Corp"
          timeframe="Jan 2020 - Present"
          briefDescription="Developed several high-impact projects..."
          fullDescription="Detailed description of the role and projects..."
          imageUrl="/team.jpg"
        />
        {/* Add more ExperienceEntry components as needed */}
      </div>
    );
}
export default Experience;

