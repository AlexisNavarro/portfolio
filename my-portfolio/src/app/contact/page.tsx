import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";


export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center pt-20 bg-cover bg-center"
            style={{ backgroundImage: 'url("/backgrounds/contact_background.jpg' }}
        >
            <h1 className="text-4xl font-bold mb-12 drop-shadow-lg text-white">Contact Me</h1>

            <div className="max-w-2xl mx-auto space-y-10 bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-xl text-white">

                {/**email */}
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Email</h2>
                    <div className="flex items-center space-x-4 justify-start">
                        <Image src="/logos/email_icon.png" alt="Email Icon" width={50} height={50} />

                        <a
                            href="mailto:navarroalexis007@gmail.com"
                            target="_blank"
                            className="text-black hover:underline">
                            navarroalexis007@gmail.com
                        </a>
                    </div>
                </div>

                {/**linkedin */}
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Linkedin</h2>
                    <div className="flex items-center space-x-4 justify-start">
                        <Image src="/logos/linkedin-logo.jpg" alt="Linkedin Logo" width={50} height={50} />
                        <a
                            href="https://www.linkedin.com/in/AlexisNavarro99"
                            target="_blank"
                            className="text-black hover:underline">
                            linkedin.com/in/AlexisNavarro99
                        </a>
                    </div>
                </div>

                {/**Github */}
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Github</h2>
                    <div className="flex items-center space-x-4 justify-start">
                        <Image src="/logos/GitHub-Logo.png" alt="Gihub Logo" width={50} height={50} />

                        <a
                            href="https://github.com/AlexisNavarro"
                            target="_blank"
                            className="text-black hover:underline">
                            github.com/AlexisNavarro
                        </a>
                    </div>
                </div>

                {/**Downloads */}
                <div className=" flex items-center space-x-4 justify-center">
                    <Download className="text-blue-300" size={30} />
                    <a
                        href="/documents/Alexis_Navarro_2025_Resume.pdf"
                        download
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-6 rounded-lg transition duration-300"
                    >
                        Download Resume
                    </a>
                </div>

                <p className="mt-4 text-sm text-white-600 italic">Let&apos;s connect or collaborate!</p>

            </div>
        </main>
    );
}