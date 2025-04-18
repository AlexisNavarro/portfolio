import React from "react";
import Image from "next/image";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen p-8 pt-20 text-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/backgrounds/background.webp")' }}
    >
      <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>

      {/*Experience*/}

      {/*Hiller Measurements Section*/}
      <div className="mb-10 text-left max-w-3xl mx-auto">
        <div className="flex items-center space-x-4">
          {/*Hiller logo */}
          <Image src="/logos/hiller_measurements_logo.jpg"
            alt="Hiller Measurments Logo"
            width={80}
            height={80}
            className="object-contain rounded-md" />
        </div>
        <h2 className="text-2xl font-semibold">Hiller Measurements</h2>
        <p className="italic text-white-500">
          Backend Software Engineer and Database Management | May 2024 - Aug 2024
        </p>
        <ul className="list-disc list-inside mt-2 text-white-700">
          <li>Enhanced SQL database performance by 60% and improved query efficiency by 70% through strategic optimization</li>
          <li>Partnered with cross-functional teams in an Agile environment to align backend solutions with project objectives</li>
          <li>Facilitated regular stakeholder meetings to provide backend progress updates and ensure transparency</li>
          <li>Developed and maintained robust REST APIs and backend scripts in Python with 100% test coverage</li>
          <li>Accelerated new hire onboarding by 80% through comprehensive technical documentation in Figma and MS Office</li>
          <li>Adhered to industry coding standards and employed Git for scalable, team-based version control</li>
          <li>Led efforts in unit and integration testing, delivering well-documented and reliable API endpoints</li>
        </ul>

        <h2 className="text-lg font-medium mt-4 mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "DBeaver", "Docker", "Git", "Gitlab", "Node.js",
            "Python", "React", "RESTful APIs", "SQL",
            "SQLAlchemy", "Pandas", "TypeScript", "JIRA", "Agile", "Figma", "MS Office", "Unit Testing", "Integration Testing"
          ].map((tech) => (
            <span key={tech} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>




      {/*PNNL Section*/}

      <div className="mb-10 text-left max-w-3xl mx-auto">
        <div className="flex items-center space-x-4">
          {/*PNNL logo */}
          <div className="bg-white p-2 rounded-md shadow-md">

            <Image src="/logos/pnnl_logo.webp"
              alt="Pacfic Northwest National Laboratory Logo"
              width={80}
              height={80}
              className="object-contain rounded-md" />
          </div>

        </div>
        <h2 className="text-2xl font-semibold">Pacific Northwest National Laboratory</h2>
        <p className="italic text-white-500">
          Full Stack Software Engineer | August 2023 - December 2023
        </p>
        <ul className="list-disc list-inside mt-2 text-white-700">
          <li>Collaborated with graduate-level peers to modernize the Home Assistant platform within an Agile framework</li>
          <li>Presented weekly project updates to stakeholders and implemented feedback to guide product development</li>
          <li>Delivered polished front-end components using React, TypeScript, HTML, and CSS to enhance user experience</li>
          <li>Built over 50 backend functions in Python and Node.js to support application scalability and performance</li>
          <li>Engineered 30+ SQL schemas to accommodate evolving project requirements and ensure data integrity</li>
          <li>Migrated legacy data to AWS RDS, significantly improving database security and reliability</li>
          <li>Configured AWS IAM to enforce secure, role-based access management across the platform</li>
          <li>Consistently met delivery timelines by producing fully tested features within Agile sprints</li>
        </ul>

        <h2 className="text-lg font-medium mt-4 mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "AWS", "AWS-RDS", "AWS-IAM", "Git",
            "Node.js", "Python", "React", "RESTful APIs",
            "SQL", "TypeScript", "HTML", "CSS", "Agile"
          ].map((tech) => (
            <span key={tech} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>


      {/*Devcom Section*/}

      <div className="mb-10 text-left max-w-3xl mx-auto">
        <div className="flex items-center space-x-4">
          {/*Devcom logo */}

          <Image src="/logos/devcom_logo.webp"
            alt="Devcom Logo"
            width={80}
            height={80}
            className="object-contain rounded-md" />

        </div>
        <h2 className="text-2xl font-semibold">Devcom</h2>
        <p className="italic text-white-500">
          Full Stack Software Engineer | January 2022 - December 2022
        </p>
        <ul className="list-disc list-inside mt-2 text-white-700">
          <li>Co-led the development of a custom CAN Bus application alongside a team of undergraduate engineers</li>
          <li>Engaged in bi-weekly meetings with clients to demonstrate progress and capture actionable feedback</li>
          <li>Oversaw Agile processes including standups, sprint planning, and peer code reviews to maintain velocity</li>
          <li>Provided mentorship in React and Next.js, supporting consistent UI/UX across the application</li>
          <li>Architected and implemented a RESTful API using Python and Flask to support backend functionality</li>
          <li>Introduced Git workflow standards, enhancing code collaboration and reducing integration issues by 90%</li>
          <li>Established automated CI/CD pipelines via Jenkins, Docker, and Kubernetes to accelerate deployments by 80%</li>
          <li>Engineered a MongoDB solution to manage real-time status data for 700+ military vehicle components, improving system reliability and decision-making efficiency</li>
        </ul>


        <h2 className="text-lg font-medium mt-4 mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
        {[
    "React", "Next.js", "Python", "Flask", "MongoDB",
    "RESTful APIs", "Git", "Jenkins", "Docker", "Kubernetes", "Agile"
  ].map((tech) => (
            <span key={tech} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>


    </main>
  );
}
