import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  const profilePic = "/Alexis_Navarro_Pic.jpg"
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center pt-20">
      <Navbar />

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
      <h1 className="text-4xl font-bold"> My Name is Alexis Navarro</h1>

      {/*Sub heading*/}
      <p className="mt-4 text-xl text-gray-600">
        Software Engineer | Cybersecurity | Full-Stack developer | Frontend Developer | Backend Developer | Database Management
      </p>
    </main>
  );
}//end of home
