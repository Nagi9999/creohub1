import Link from "next/link"
export default function Navbar(){
    return(
        <nav class="navbar">
        <div class="nav">
          <div class="container">
        
        <Link href="/" class="title"> <img
        class="logo"
        src="https://media.istockphoto.com/id/1494904221/vector/basketball-ball-flat-design.webp?s=2048x2048&w=is&k=20&c=VV1yOY5DE1j1z-3laSczqLkfPaAHDEq1CJiX0hRl29E="
        alt="Your Logo"
      />
      <div class="myname">Naji El Hakim</div>
      </Link>
     
      <ul class="list">
        <li><Link href="#">About Me </Link></li>
        <li><Link href="#">My Projects </Link></li>
        <li><Link href="#">Contact Me </Link></li>
       
      </ul>
    </div>
    </div>
    </nav>
    )
}