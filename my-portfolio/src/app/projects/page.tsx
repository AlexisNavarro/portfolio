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
                        description: "My portfolio that will be used to show case my experience, education, and project done over my software career.",
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