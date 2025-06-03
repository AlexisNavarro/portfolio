import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Experience | Alexis Navarro",
  description:
    "Discover Alexis Navarro's professional journey, featuring software engineering roles at national labs, government agencies, and startups.",
};

export default function ExperiencePage() {
  return (
    <main
      className="min-h-screen p-8 pt-20 text-center bg-cover bg-center text-white"
      style={{ backgroundImage: 'url("/backgrounds/experience_background3.jpg")' }}
    >
      <h1 className="text-4xl font-bold mb-12 drop-shadow-lg">Professional Experience</h1>

      {/* Experience Sections */}
      <div className="space-y-14 max-w-4xl mx-auto">

        {/* Reusable Experience Card */}
        {[
          {
            logo: "/logos/hiller_measurements_logo.jpg",
            alt: "Hiller Measurements Logo",
            company: "Hiller Measurements",
            title: "Backend Software Engineer and Database Management",
            date: "May 2024 - Aug 2024",
            bullets: [
              "Actively contributed to Agile sprints by sharing updates and deliverables related to backend development and database design",
              "Enhanced SQL database performance by 60% and improved query efficiency by 70% through strategic optimization",
              "Partnered with cross-functional teams in an Agile environment to align backend solutions with project objectives",
              "Facilitated regular stakeholder meetings to provide backend progress updates and ensure transparency",
              "Developed and maintained robust REST APIs and backend scripts in Python with 100% test coverage",
              "Accelerated new hire onboarding by 80% through comprehensive technical documentation in Figma and MS Office",
              "Adhered to industry coding standards and employed Git for scalable, team-based version control",
              "Led efforts in unit and integration testing, delivering well-documented and reliable API endpoints",
            ],
            tech: [
              "DBeaver", "Docker", "Git", "Gitlab", "Node.js", "Python", "React",
              "RESTful APIs", "SQL", "SQLAlchemy", "Pandas", "TypeScript", "JIRA",
              "Agile", "Figma", "MS Office", "Unit Testing", "Integration Testing"
            ],
          },
          {
            logo: "/logos/pnnl_logo.webp",
            alt: "Pacific Northwest National Laboratory Logo",
            company: "Pacific Northwest National Laboratory",
            title: "Full Stack Software Engineer",
            date: "August 2023 - December 2023",
            bullets: [
              "Collaborated with graduate-level peers to modernize the Home Assistant platform within an Agile framework",
              "Presented weekly project updates to stakeholders and implemented feedback to guide product development",
              "Delivered polished front-end components using React, TypeScript, HTML, and CSS to enhance user experience",
              "Built over 50 backend functions in Python and Node.js to support application scalability and performance",
              "Engineered 30+ SQL schemas to accommodate evolving project requirements and ensure data integrity",
              "Migrated legacy data to AWS RDS, significantly improving database security and reliability",
              "Configured AWS IAM to enforce secure, role-based access management across the platform",
              "Consistently met delivery timelines by producing fully tested features within Agile sprints",
              "Resolved 100+ issues related to application security vulnerabilities and performance inefficiencies",
            ],
            tech: [
              "AWS", "AWS-RDS", "AWS-IAM", "Git", "Node.js", "Python", "React",
              "RESTful APIs", "SQL", "TypeScript", "HTML", "CSS", "Agile"
            ],
          },
          {
            logo: "/logos/devcom_logo.webp",
            alt: "DEVCOM Logo",
            company: "DEVCOM",
            title: "Full Stack Software Engineer",
            date: "January 2022 - December 2022",
            bullets: [
              "Co-led the development of a custom CAN Bus application alongside a team of undergraduate engineers",
              "Engaged in bi-weekly meetings with clients to demonstrate progress and capture actionable feedback",
              "Oversaw Agile processes including standups, sprint planning, and peer code reviews to maintain velocity",
              "Provided mentorship in React and Next.js, supporting consistent UI/UX across the application",
              "Architected and implemented a RESTful API using Python and Flask to support backend functionality",
              "Introduced Git workflow standards, enhancing code collaboration and reducing integration issues by 90%",
              "Established automated CI/CD pipelines via Jenkins, Docker, and Kubernetes to accelerate deployments by 80%",
              "Engineered a MongoDB solution to manage real-time status data for 700+ military vehicle components",
            ],
            tech: [
              "React", "Next.js", "Python", "Flask", "MongoDB", "RESTful APIs",
              "Git", "Jenkins", "Docker", "Kubernetes", "Agile"
            ],
          }
        ].map((exp, idx) => (
          
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md text-left"
          >
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src={exp.logo}
                alt={exp.alt}
                width={80}
                height={80}
                className="object-contain rounded-md bg-white p-1"
              />
              <div>
                <h2 className="text-2xl font-semibold">{exp.company}</h2>
                <p className="italic text-sm text-gray-300">{exp.title} | {exp.date}</p>
              </div>
            </div>

            <ul className="list-disc list-inside text-gray-100 space-y-1 pl-5">
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <h3 className="text-lg font-medium mt-4 mb-2 text-blue-200">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-700 px-3 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
