import React from "react";
import Image from "next/image";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen p-8 pt-20 text-center">
      <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>

      {/*Experience*/}
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
          Backend Software Engineer Intern | May 2024 - Aug 2024
        </p>
        <ul className="list-disc list-inside mt-2 text-white-700">
          <li>Optimized SQL database performance by 60%</li>
          <li>Implemented Python automation scripts and REST APIs</li>
          <li>Documented backend systems to cut onboarding time in half</li>
        </ul>
      </div>


      <div className="mb-10 text-left max-w-3xl mx-auto">
        <div className="flex items-center space-x-4">
          {/*PNNL logo */}
          <div className="bg-white p-2 rounded-md shadow-md">

            <Image src="/logos/pnnl_logo.webp"
              alt="Hiller Measurments Logo"
              width={80}
              height={80}
              className="object-contain rounded-md" />
          </div>

        </div>
        <h2 className="text-2xl font-semibold">Pacific Northwest National Laboratory</h2>
        <p className="italic text-white-500">
          Full Stack Software Engineer | Summer 2023
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
