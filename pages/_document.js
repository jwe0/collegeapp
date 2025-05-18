import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Tresham college 2025 open day |</title>
      <body className="antialiased">
        <nav className="bg-[#143c71] p-3 ">
        <div className="flex justify-between items-center">
            <Link href="/">
            <div className="flex items-center gap-x-3">
                <img className="w-20" src="logo-colour.png" />
            </div>
            </Link>
          <div className="flex gap-x-4">
            <Link className="text-white underline hover:translate-y-1 p-2" href="/about">About</Link>
            <Link className="text-white underline hover:translate-y-1 p-2" href="/contact">Contact</Link>
            <Link className="text-white underline hover:translate-y-1 p-2" href="/register">Register</Link>

          </div>
        </div>
      </nav>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
