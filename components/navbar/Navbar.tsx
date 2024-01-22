import Image from "next/image";
import Link from "next/link";
import navItems from "./navItems.json";
import { NavButton } from "./NavButton";

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <section className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logotipo.png"
            width={40}
            height={40}
            className="h-8"
            alt="Pipi web logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Pipí web
          </span>
        </Link>
        <NavButton />
        <article
          className="hidden w-full md:block md:w-auto"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map(({ path, text }) => (
              <li key={path}>
                <Link
                  href={path}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </nav>
  );
};
