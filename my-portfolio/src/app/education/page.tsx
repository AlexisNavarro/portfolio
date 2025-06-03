import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Education | Alexis Navarro",
  description:
    "Learn about Alexis Navarro's academic background, including a Master's in Software Engineering and a Bachelor's in Computer Science from UTEP.",
};


export default function EducationPage() {
  return (
    <main
      className="min-h-screen p-8 pt-20 text-center bg-cover bg-center text-white"
      style={{ backgroundImage: 'url("/backgrounds/education_background2.jpg")' }}
    >
      <h1 className="text-4xl font-bold mb-12 drop-shadow-lg">Education</h1>

      <div className="space-y-14 max-w-4xl mx-auto">

        {/* Reusable Education Card */}
        {[{
          logo: "/logos/utep_logo.png",
          alt: "University of Texas at El Paso Logo",
          institution: "The University of Texas at El Paso",
          degree: "Master of Science in Software Engineering - Secure Cyber-Systems",
          date: "Graduated: May 2024 | GPA 3.90",
          bullets: [
            "Specialized in Secure Cyber-Systems",
            "Admitted to UTEP's Fast Track Program during undergrad (Aug 2022)",
            "Collaborated with Pacific Northwest National Laboratory to develop a custom Home Assistant version as part of Capstone",
            "Awarded 2nd place in a Reverse Engineering Cybersecurity Hackathon",
            "Attended Great Minds in STEM Conference for five consecutive years",
            "Placed 10th out of 90 teams in GMiS Cybersecurity Hackathon (Pasadena, CA)"
          ],
          courses: [
            "Software Engineering Practicum",
            "Software Requirements Engineering",
            "Software Project Management",
            "Software Architecture and Design",
            "Secure Web-based Systems",
            "Computer Networks",
            "Software Reverse Engineering",
            "Computer Security",
          ],
          techs: [
            "Python", "Java", "SQL", "AWS","Typescript", "React", "C", "Kotlin","Websockets",
            "Git", "Docker", "Kubernetes", "Agile", "Integration Testing", "Unit Testing",
            "Next.js", "Bash", "Linux", "TCP/IP", "Assembly", "Kali Linux"
          ]
        },
        {
          logo: "/logos/utep_logo.png",
          alt: "University of Texas at El Paso Logo",
          institution: "The University of Texas at El Paso",
          degree: "Bachelor of Science in Computer Science - Software Engineering",
          date: "Graduated: May 2022 | GPA 3.35",
          bullets: [
            "Earned a Minor in Mathematics",
            "Focused on software engineering within the CS program",
            "Awarded the S-STEM Scholarship (2018-2022)",
            "Completed Capstone project with U.S. Army DEVCOM to design a CAN Bus System",
            "Co-founded and served as Treasurer of UTEP Miner Robotics",
            "Attended Great Minds in STEM for four consecutive years, expanding professional network",
            "Placed 27th out of 115 teams in GMiS Cybersecurity Hackathon (Pasadena, CA)"
          ],
          courses: [
            "Intro to Computer Science",
            "Problem Solving & Algorithms",
            "Elem. Data Struct./Algorithms",
            "Calculus 1-3",
            "Discrete Mathematics",
            "Data Structures",
            "Matrix Algebra",
            "Introductory Mechanics",
            "Adv. Object-Oriented Programming",
            "Comp Arch I: Comp Org/Design",
            "Theory of Operating Systems",
            "Data Base Management",
            "Software Eng: Requirements Eng",
            "Software Eng: Design & Implmnt",
            "Software Integration and V&V"
          ],
          techs: [
            "Python", "Java", "SQL", "PostgreSQL", "MongoDB", "React", "Flask", "Spring Boot","Javascript", "Go", "C",
            "Git", "Jenkins", "Docker", "Kubernetes", "Agile", "Integration Testing", "Unit Testing",
            "Next.js", "Websockets", "Dart", "PHP", "Linux", "Bash", "TCP/IP", "Kali Linux"
          ],
        }
        ].map((edu, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md text-left"
          >
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src={edu.logo}
                alt={edu.alt}
                width={100}
                height={100}
                className="object-contain rounded-md bg-white p-1"
              />
              <div>
                <h2 className="text-2xl font-semibold">{edu.institution}</h2>
                <p className="italic text-sm text-gray-300">{edu.degree} | {edu.date}</p>
              </div>
            </div>

            {/*education bullet points context */}
            <ul className="list-disc list-inside text-gray-100 space-y-1 pl-5">
              {edu.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}

            </ul>

            {/**courses */}

            {edu.courses && edu.courses.length > 0 && (
              <details className="mt-4">

                {/**drop down */}
                <summary className="cursor-pointer font-semibold text-white underline mb-2">
                  Relevant Courses
                </summary>
                <div className="flex flex-wrap gap-2 mt-2">
                  {edu.courses.map((course, i) => (
                    <span
                      key={i}
                      className="bg-blue-700 text-white text-sm px-3 py-1 rounded-full shadow-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </details>
            )}


            {/**courses */}
            {edu.techs && edu.techs.length > 0 && (
              <details className="mt-4">

                {/**drop down */}
                <summary className="cursor-pointer font-semibold text-white underline mb-2">
                  Relevant Tech
                </summary>
                <div className="flex flex-wrap gap-2 mt-2">
                  {edu.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-700 text-white text-sm px-3 py-1 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </details>
            )}
          </div>
        ))}

      </div>
    </main>
  );
}
