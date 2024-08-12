// app/components/TechStackFlairs.tsx
import React from 'react';

const techStack = [
    "Next.js",
    "TypeScript",
    
    "React",
    "Tailwind CSS",

    "framer-motion"
];

const TechStackFlairs = () => {
    return (
        <div className="overflow-hidden relative">
            <div className="flex animate-scroll">
                {techStack.concat(techStack).map((tech) => (
                    <span
                        key={tech}
                        className="inline-block px-4 py-2 mx-2 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-semibold"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TechStackFlairs;
