import React from "react";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen p-8 pt-20 text-center">
      <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>

      <div className="mb-10 text-left max-w-3xl mx-auto">
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
    </main>
  );
}
