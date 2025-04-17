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
          <li>Optimized SQL database performance by 60% and boosted query efficiency by 70%</li>
          <li>Collaborated with cross-functional teams in an Agile enviroment</li>
          <li>Built REST APIs and backend scripts in Python; achieving 100% test coverage</li>
          <li>Reduced onboarding time by 80% with clear technical docs in Figma & MS Office</li>
          <li>Learned proper coding standards and utilization of Git for version control within a large team</li>
        </ul>

        <h2 className="text-lg font-medium mt-4 mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "DBeaver", "Docker", "Git", "Gitlab", "Node.js",
            "Python", "React", "RESTful APIs", "SQL",
            "SQLAlchemy", "Pandas", "TypeScript", "JIRA", "Agile", "Figma", "MS Office"
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
          <li>Collaborated with Master's students to develop a new version of Home Assistant in an Agile environment</li>
          <li>Built front-end features using React, TypeScript, HTML, and CSS</li>
          <li>Developed 50 backend functions with Python and Node.js</li>
          <li>Designed 30+ SQL schemas to meet evolving team and application requirements</li>
          <li>Migrated legacy records to AWS RDS, enhancing database security by 80%</li>
          <li>Configured AWS IAM for role-based access controls</li>
          <li>Delivered fully tested features as part of an Agile development team</li>
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
          Full Stack Software Engineer | January 2022 – December 2022
        </p>
        <ul className="list-disc list-inside mt-2 text-white-700">
          <li>Built front-end features using TypeScript, HTML, and CSS</li>
          <li>Collaborated with researchers to visualize climate data</li>
          <li>Delivered fully tested components in an agile team</li>
        </ul>
      </div>


    </main>
  );
}
