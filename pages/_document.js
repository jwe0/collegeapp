import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Tresham college 2025 open day |</title>
      <body className="antialiased">
      <div class="bg-[#143c71]/20 backdrop-blur-md shadow-md text-black flex justify-between h-16 items-center mx-auto px-6">
        <ul class="flex justify-center gap-4 mx-auto">
          <li>
            <a href="about" class="font-bold bg-[#668dc0]/30 px-4 py-2 rounded-lg hover:bg-gray-600 hover:scale-105 transition">
              About
            </a>
          </li>
          <li>
            <a href="contact" class="font-bold bg-[#668dc0]/30 px-4 py-2 rounded-lg hover:bg-gray-600 hover:scale-105 transition">
              Contact
            </a>
          </li>
          <li>
            <a href="register" class="font-bold bg-[#668dc0]/30 px-4 py-2 rounded-lg hover:bg-gray-600 hover:scale-105 transition">
              Register
            </a>
          </li>
        </ul>
      </div>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
