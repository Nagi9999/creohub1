  import Link from "next/link"
  export default function Navbar(){
      return(
        <nav class="fixed top-0 w-full bg-orange-500 text-black text-lg py-2 ">
        <div class="container 2xl flex justify-between items-center mx-auto  ">
          <a href="/" class="flex items-center text-black no-underline">
            <img src="https://media.istockphoto.com/id/1494904221/vector/basketball-ball-flat-design.webp?s=2048x2048&w=is&k=20&c=VV1yOY5DE1j1z-3laSczqLkfPaAHDEq1CJiX0hRl29E=" alt="Your Logo" class="h-10 w-10 rounded-full" />
            <div class="font-bold ml-2">Naji El Hakim</div>
          </a>
          <ul class="flex space-x-4">
            <li><a href="#" class="text-black no-underline hover:text-gray-500">About Me</a></li>
            <li><a href="#" class="text-black no-underline hover:text-gray-500">My Projects</a></li>
            <li><a href="#" class="text-black no-underline hover:text-gray-500">Contact Me</a></li>
          </ul>
        </div>
      </nav>
      )
  }