import React from "react";
import Image from "next/image";

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
              "Concentration in Secure Cyber-Systems",
              "Accepted into Fast Track Program during undergraduate studies (Aug 2022)",
              "Attended Great Minds in STEM for the fifth consecutive year",
              "Placed 10th out of 90 teams in GMiS Hackathon, Pasadena, California"
            ],
          },
          {
            logo: "/logos/utep_logo.png", 
            alt: "University of Texas at El Paso Logo",
            institution: "The University of Texas at El Paso",
            degree: "Bachelor of Science in Computer Science - Software Engineering",
            date: "Graduated: May 2022 | GPA 3.35",
            bullets: [
              "Minor in Mathematics",
              "S-STEM Scholarship Recipient (2018-2022)",
              "Completed undergraduate capstone on secure data communication"
            ]
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

            <ul className="list-disc list-inside text-gray-100 space-y-1 pl-5">
              {edu.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </main>
  );
}
