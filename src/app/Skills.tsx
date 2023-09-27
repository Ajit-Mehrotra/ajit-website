
interface Skills {
    name: string;
    level: number;
}

interface SkillsProps {
    title: string;
    skills: Skills[];
}

const Skills: React.FC<SkillsProps> = ({ title, skills }) => {
    return (
        <div className="p-8">
            <h2 className="text-2xl font-light mb-4">{title}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                    <li key={index} className="relative border p-4 rounded  transition-all duration-300">
                        <div
                            style={{ width: `${skill.level}%` }}
                            className="absolute top-0 left-0 h-full bg-yellow-200 rounded "
                        ></div>
                        <div className="relative">
                            {skill.name}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;

