import Link from "next/link";

export default function Header() {
  return (
    <header className="z-100 relative">
      <nav className="flex flex-col justify-center items-center gap-8">
        {/* <div className="flex text-4xl">
          <h2 className="tracking-wider">Jostein Westrum</h2>
        </div> */}
        <div className="flex gap-24 text-2xl tracking-wider pt-8 text-shadow-black">
          <Link href="/">
            <button className="hover:scale-95 cursor-pointer">home</button>
          </Link>
          <Link href="/about">
            <button className="hover:scale-95 cursor-pointer">about</button>
          </Link>
          <Link href="/projects">
            <button className="hover:scale-95 cursor-pointer">projects</button>
          </Link>
          <Link href="/contact">
            <button className="hover:scale-95 cursor-pointer">contact</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
