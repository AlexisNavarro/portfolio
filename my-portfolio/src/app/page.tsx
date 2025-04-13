import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center pt-20">
      <Navbar/>
      <h1 className="text-4xl font-bold"> My Name is Alexis Navarro</h1>
      <p className="mt-4 text-xl text-gray-600">
        Software Engineer | Cybersecurity | Full-Stack developer | Frontend Developer | Backend Developer | Database Management
      </p>

    </main>
  );
}//end of home
