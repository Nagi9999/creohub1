import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-orange-500 text-black sm:text-lg text-sm py-2">
      <div className="2xl:container flex justify-between items-center mx-auto sm:px-4 px-10">
        <Link href="/">
          <span className="flex items-center text-black no-underline">
            <img
              src="https://media.istockphoto.com/id/1494904221/vector/basketball-ball-flat-design.webp?s=2048x2048&w=is&k=20&c=VV1yOY5DE1j1z-3laSczqLkfPaAHDEq1CJiX0hRl29E="
              alt="Your Logo"
              className="h-10 w-10 rounded-full"
            />
            <div className="font-bold ml-2">Naji El Hakim</div>
          </span>
        </Link>
        <ul className="flex sm:flex-row flex-col sm:space-x-4 space-x-0 sm:space-y-0 space-y-2">
          <li>
            <Link href="/aboutme">
              <span className="text-black hover:text-gray-500 cursor-pointer">
                About Me
              </span>
            </Link>
          </li>
          <li>
            <Link href="/myprojects">
              <span className="text-black hover:text-gray-500 cursor-pointer">
                My Projects
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contactme">
              <span className="text-black hover:text-gray-500 cursor-pointer">
                Contact Me
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
