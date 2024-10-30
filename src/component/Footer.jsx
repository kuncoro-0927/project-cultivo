import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-hijau-tua  mt-7 lg:mt-20 ">
        <div className="py-5 mx-7">
          <Link to="/">
            <h2 className="text-base font-bold text-black">Cultivo</h2>
          </Link>
          <p className="text-xs">lorem ipsum dolor sit amet</p>

          <div className="mt-4 text-sm font-semibold">
            <p>Cultivo</p>
            <ul>
              <li>Tentang Kami</li>
              <li>Bergabung dengan Kami</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
