import React from "react";
import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center pt-20 bg-cover bg-center"
        style={{backgroundImage: 'url("/backgrounds/contact_background.jpg'}}
        >
            <h1 className="text-4xl font-bold mb-12 drop-shadow-lg text-white">Contact Me</h1>

            <div className="max-w-2xlmx-auto space-y-10 bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-xl text-white">

                {/**email */}

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Email</h2>
                    <a href="mailto:navarroalexis007@gmail.com" className="text-black-800 hover:underline">
                        navarroalexis007@gmail.com
                    </a>
                </div>

                {/**linkedin */}
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Linkedin</h2>
                    <a href="https://www.linkedin.com/in/AlexisNavarro99" target= "_blank" className="text-blue-700 hover:underline">
                    linkedin.com/in/AlexisNavarro99
                    </a>
                </div>

                {/**Github */}

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Github</h2>
                    <a href="https://github.com/AlexisNavarro"  target= "_blank" className="text-blue-300 hover:underline">
                        navarroalexis007@gmail.com
                    </a>
                </div>



                
            </div>

        </main>

    );
}