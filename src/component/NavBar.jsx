import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className=" py-3 sm:mx-5 lg:mx-10">
      <div className="justify-between px-4 lg:max-w-7xl md:items-center md:flex md:px-0">
        <div className="">
          <div className="flex items-center justify-between py-3 md:py-4 md:block">
            <a href="">
              <h2 className="text-2xl font-bold text-black">Cultivo</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-start pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-start md:px-5 md:py-4 md:rounded-full justify-start space-y-8 md:flex md:space-x-3 lg:space-x-4 md:space-y-0">
              <li className="text-black hover:text-indigo-200 md:text-sm lg:text-base">
                <Link to="/about">Eksplor Destinasi</Link>
              </li>
              <li className="text-black hover:text-indigo-200 md:text-sm lg:text-base">
                <Link to="/aktivitas">Aktivitas</Link>
              </li>
              <li className="text-black hover:text-indigo-200 md:text-sm lg:text-base">
                <Link to="">Bergabung</Link>
              </li>
              <li className="text-black hover:text-indigo-200 md:text-sm lg:text-base">
                <Link to="">Tentang</Link>
              </li>
              <li className="text-black hover:text-indigo-200 md:text-sm lg:text-base">
                <Link to="">Kontak</Link>
              </li>
            </ul>

            <div className="mt-3 space-y-2 md:hidden">
              <Link
                to=""
                className="inline-block w-full px-4 py-2 text-center text-white bg-slate-950 rounded-md shadow hover:bg-gray-800"
              >
                Masuk
              </Link>
              <Link
                to=""
                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                Daftar
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <a
            href="/"
            className="text-black mr-4 md:mr-2 md:text-sm lg:text-base"
          >
            Masuk
          </a>
          <button
            type="submit"
            className="px-5 py-2 text-white bg-hijau-tua md:text-sm lg:text-base rounded-full shadow hover:bg-gray-800"
          >
            Daftar
          </button>
        </div>
      </div>
    </nav>
  );
}
