import React from "react";
import { Code, Star, User } from "lucide-react";

export const metadata = {
    title: "Projects | Alexis Navarro",
    description:
        "Explore software engineering projects by Alexis Navarro, showcasing full-stack applications, CAN bus visualizations, embedded systems, and more.",
};


export default function ProjectPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center pt-20 bg-cover bg-center"
            style={{ backgroundImage: 'url("/backgrounds/projects_background3.jpg")' }}>

            <h1 className="text-4xl font-bold mb-12 drop-shadow-lg">Projects</h1>

            {/** Projects List */}
            <div className="space-y-14 max-w-4xl mx-auto">
                {/**cards */}
                {[
                    {
                        project_name: "Portfolio",
                        description: "This portfolio website was designed and developed using Next.js and Tailwind CSS to showcase my technical skills, experience, and personal projects in a clean and responsive layout.",
                        role: "Frontend Developer",
                        highlights: ["Responsive Design", "Modern UI", "Fast Performance", "Downloadable Resume"],
                        tech: ["React", "next.js", "Typescript", "Tailwind CSS", "Git", "Github"],
                        github_link: "https://github.com/AlexisNavarro/portfolio",
                    },
                    {
                        project_name: "Scientific Calculator",
                        description: "A fully functional scientific calculator that performs arithmetic operations and plots mathematical equations in real-time. It includes a persistent history feature backed by a local SQL database, allowing users to review previous calculations.",
                        role: "Full-Stack Developer",
                        highlights: ["Real-Time Plotting", "Persistent Calculation History", "Responsive Design"],
                        tech: ["React", "Typescript", "CSS", "SQL", "Git", "Github"],
                        github_link: "https://github.com/AlexisNavarro/calculator_react"
                    },
                    {
                        project_name: "CAN BUS Visualizer",
                        description: "This project allows users to visualize the status of various vehicle components over the CAN bus and store the data in a database for tracking and analysis. Developed using Python with Flask, it integrates frameworks like Pyvis for network visualization and provides an intuitive user interface for real-time monitorings",
                        role: "Full Stack Developer",
                        highlights: ["Real-time Data Visualization", "Database Integration for Historical Tracking", "Interactive Network Graphs (Pyvis)", "Restful API Support"],
                        tech: ["Python", "Flask", "Pyvis", "JavaScript", "HTML", "CSS", "Git", "Github"],
                        github_link: "https://github.com/aavenzornav/CS4311_CANBusVisualizer_2/tree/master",
                    },
                    {
                        project_name: "OpenFlow Network Controller Lab",
                        description: "Built a custom software-defined network using the POX controller and OpenFlow protocol. Established host-to-host communication and implemented rule-based packet filtering to control network traffic flow. Demonstrated programmable network behavior and dynamic flow control using Python scripts.",
                        role: "Network Engineer (SDN Focus)",
                        highlights: [
                            "Custom Traffic Flow Rules",
                            "Host-to-Host Communication",
                            "Rule-Based Packet Filtering",
                            "Software-Defined Networking (SDN)"
                        ],
                        tech: ["Python", "OpenFlow", "POX Controller", "Mininet", "Git", "Github"],
                        github_link: "https://github.com/AlexisNavarro/networks-lab3",
                    },
                    {
                        project_name: "MSP430 Blinky Toy",
                        description: "Developed an interactive toy using the MSP430 microcontroller programmed in C and assembly. The system features dynamic LED patterns, sound generation, and state-based transitions using button inputs. Implemented a state machine for mode management and integrated low-level assembly for performance-critical functionality.",
                        role: "Embedded Systems Developer",
                        highlights: ["Dynamic LED Control",
                            "Sound Generation via Timer Interrupts",
                            "Finite State Machine Design",
                            "Assembly-Based State Transitions"],
                        tech: ["C", "Assembly", "MSP430", "EMACS", "Git", "Github"],
                        github_link: "https://github.com/AlexisNavarro/MSP430-Blinky-Toy/tree/main",
                    }
                ].map((proj, idx) => (

                    <div
                        key={idx}
                        className="bg-black/70 text-gray-100 p-6 rounded-2xl shadow-md text-left text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >

                        {/*proj name and description*/}
                        <div>
                            <h2 className="text-2xl font-semibold">{proj.project_name}</h2>
                            <p className="italic text-sm text-white">{proj.description}</p>
                        </div>

                        {/**role */}
                        <div className="mt-3">
                            <h3 className="flex items-center gap-2 text-blue-400 font-medium">
                                <User className="w-4 h-4" />
                                Role:
                            </h3>
                            <p className="text-white">{proj.role}</p>
                        </div>

                        {/**Highlights */}
                        <div>
                            <h3 className=" flex items-center gap-2 text-blue-400 font-medium">
                                <Star className="w-4 h-4" />
                                Highlights
                            </h3>
                            <ul className="mt-1 space-y-1">
                                {proj.highlights.map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 text-sm">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/**tech stack */}
                        <div className="mt-4">
                            <h3 className="flex items-center gap-2 text-blue-400 font-medium">
                                <Code className="w-4 h-4" />
                                Tech Stack
                            </h3>
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

                        </div>

                        {/**Github */}
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