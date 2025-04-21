import React from "react";
import Image from "next/image";

export default function educationPage() {
    return (
        <main className="min-h-screen p-8 pt-20 text-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/backgrounds/education_background2.jpg")' }}
        >
            <h1 className=" text-4xl font-bold mb-8">Education</h1>

            {/*Masters */}
            <div className="mb-10 text-left max-w-3xl mx-auto">
                <div className="mb-6">
                    <h2 className="text-xl font-medium">The University of Texas at El Paso</h2>
                    <p className="italic text=white-500">
                        Masters of Science in Software Engineering - Secure Cyber - Systems
                    </p>
                    <p className="text-white-700">Graduated: May 2024 | GPA 3.90</p>
                    <ul className="list-disc list-inside mt-2 text-white-700">
                        <li>Concentration in Secure Cyber-Systems</li>
                        <li>Accepted into Fast track Program in August 2022 during Undergrad</li>
                        <li>Attended Great Minds in STEM for the 5th time in a row</li>
                        <li>Achieved 10th out of 90th place in GMiS Hackaton in Pasadena, California</li>
                    </ul>
                </div></div>


        </main>
    );
}