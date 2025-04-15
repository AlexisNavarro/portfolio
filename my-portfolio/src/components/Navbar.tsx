import Link from "next/link";

export default function Navbar() {
  return (
    //first line will fix the navbar to the top of the screen everytime
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-end space-x-8">
        <Link href="/" className="hover:underline">Main Page</Link>
        <Link href="#education" className="hover:underline">Education</Link>
        <Link href="/experience" className="hover:underline">Experience</Link>
        <Link href="#contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}
