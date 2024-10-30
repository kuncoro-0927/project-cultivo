import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 50); // Ubah threshold sesuai kebutuhan
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full py-1 px-10 transition-colors duration-300 ${
          scrolling ? "bg-hijau-opa text-white" : "bg-white text-black"
        } z-50`}
      >
        <div className="flex justify-between px-4 lg:max-w-7xl md:items-center md:flex md:px-0">
          <div className="flex items-center justify-between py-3 md:py-4">
            <Link to="/">
              <h2 className="text-2xl font-bold">Cultivo</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
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
                    className="w-6 h-6"
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
          <div>
            <div
              className={`flex-1 justify-start pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-start justify-start space-y-8 md:flex md:space-x-3 lg:space-x-4 md:space-y-0">
                <li className="hover:text-indigo-200 md:text-sm lg:text-base">
                  <Link to="#">Eksplor Destinasi</Link>
                </li>
                <li className="hover:text-indigo-200 md:text-sm lg:text-base">
                  <Link to="/aktivitas">Aktivitas</Link>
                </li>
                <li className="hover:text-indigo-200 md:text-sm lg:text-base">
                  <Link to="">Bergabung</Link>
                </li>
                <li className="hover:text-indigo-200 md:text-sm lg:text-base">
                  <Link to="/about">Tentang</Link>
                </li>
                <li className="hover:text-indigo-200 md:text-sm lg:text-base">
                  <Link to="/kontak">Kontak</Link>
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
              className={`text-black mr-4 md:mr-2 md:text-sm lg:text-base transition-colors duration-300 ${
                scrolling ? "text-white" : "text-black"
              }`}
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
    </>
  );
}
