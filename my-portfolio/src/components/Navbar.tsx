import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-end items-center px-5 py-4">
        <div className="flex space-x-8">
          {[
            { href: "/", label: "Main Page" },
            { href: "/education", label: "Education" },
            { href: "/experience", label: "Experience" },
            { href: "/projects", label: "Projects" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white font-medium hover:text-blue-300 transition duration-200 px-3 py-1 rounded-md hover:bg-white/10"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
