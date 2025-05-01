import React from "react";
import Image from "next/image";

export default function ProjectPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center pt-20 bg-cover bg-center"
            style={{ backgroundImage: 'url("/backgrounds/projects_background.jpg' }}>

            <h1 className="text-4xl font-bold mb-12 drop-shadow-lg">Projects</h1>

            {/** Projects List */}
            <div className="space-y-14 max-w-4xl mx-auto">
                {/**cards */}
                {[
                    {
                        project_name: "Portfolio",
                        description: "This portfolio website was designed and developed using Next.js and Tailwind CSS to showcase my technical skills, experience, and personal projects in a clean and responsive layout.",
                        role: "Frontend Developer",
                        highlights:["Responsive Design", "Modern UI", "Fast Performance", "Downloadable Resume"],
                        tech: ["React", "next.js", "Typescript", "Tailwind CSS", "Git", "Github"],
                        github_link: "https://github.com/AlexisNavarro/portfolio",
                    }
                ].map((proj, idx) => (

                    <div
                        key={idx}
                        className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md text-left">

                        <div>
                            <h2 className="text-2xl font-semibold">{proj.project_name}</h2>
                            <p className="italic text-sm text-black">{proj.description}</p>
                        </div>

                        <p className="text-sm text-white">
                            <span className="font-semibold text-blue-800">Role:</span>{proj.role}
                        </p>

                        <div>
                            <h3 className="text-lg font-medium mb-1 text-blue-800">Highlights</h3>
                            <ul className="list-disc list-inside text-white text-sm">
                                {proj.highlights.map((item,index)=>(
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                        </div>

                        <h3 className="text-lg font-medium mt-4 mb-2 text-blue-800">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {proj.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-blue-700 px-3 py-1 rounded-full texxt-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div>
                            <a href={proj.github_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-blue-500 hover:text-blue-700 font-semibold underline">
                                View on GitHub
                            </a>
                        </div>



                    </div>
                ))}
            </div>
        </main>
    );
}