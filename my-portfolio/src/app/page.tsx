import Image from "next/image";

export default function Home() {
  const profilePic = "/Alexis_Navarro_Pic.jpg"
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center pt-20 bg-cover bg-center"
      style={{ backgroundImage: 'url("/backgrounds/home_background3.jpg' }}
    >


      {/*Profile Picture aka Alexis */}
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="rounded-full overflow-hidden shadow-lg">
          <Image
            src={profilePic}
            alt="Alexis Navarro"
            width={160}
            height={160}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      {/*Text containing name and roles*/}
      {/*Main heading*/}
      <h1 className="text-4xl font-bold">Alexis Navarro</h1>

      {/*Sub heading*/}
      <p className="mt-4 text-xl text-white-600">
        Software Engineer | Cybersecurity | Full-Stack developer | Frontend Developer | Backend Developer | Database Management
      </p>

      {/* about me section */}
      <section id="about" className="max-w-2xl mt-12 px-4 text-left">
        <h2 className="text-2xl font-bold mb-4 text-white-700">About Me</h2>
        <p className="text-white-700 text-lg leading-relaxed">
          Hello! I'm Alexis Navarro, a U.S. citizen and proud Hispanic software engineer with a Master's degree in Software Engineering from the University of Texas at El Paso. I also earned my Bachelor's degree there, majoring in Computer Science with a concentration in Software Engineering and a minor in Mathematics.
          <br /><br />
          I have hands-on experience building scalable full-stack applications in both government and private sectors, having contributed to impactful projects at Pacific Northwest National Laboratory, DEVCOM, and startups like Hiller Measurements. My strengths lie in backend and frontend development, cybersecurity practices, and collaborating in fast-paced, Agile environments. I'm passionate about using technology to solve real-world problems and continuously improving both my technical and team skills.
        </p>

        <section className="mt-8 max max-w-2xl text-left">
          <h2 className="text-2xl font-semibold mb-4">Notable Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["Python", "Java", "Typescript", "React", "Node.js", "SQL", "AWS", "Docker", "MongoDB", "TypeScript", "PostgreSQL", "Git", "Jenkins", "Flask"].map((tech) => (
              <span key={tech} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}//end of home
