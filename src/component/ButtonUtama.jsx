import { LuArrowUpRight } from "react-icons/lu";
const ButtonUtama = () => {
  return (
    <div className="flex items-center ml-auto mt-2">
      <div className="text-[0.7rem] sm:text-[0.7rem] md:text-[0.6rem] lg:text-sm sm:px-3 pl-3 pr-1 py-1 lg:px-4 md:py-1 md:px-4 lg:pr-1 lg:py-1 rounded-full bg-hijau-opa bg-opacity-80 hover:bg-hijau-opa hover:opacity-900 duration-300 text-white flex items-center">
        Selengkapnya
        <div className="py-3 px-3 rounded-full ml-1 md:px-3 md:py-2 bg-hijau-tua text-white md:rounded-full md:ml-2 lg:ml-2 lg:py-3 lg:px-3 items-center">
          <LuArrowUpRight className="lg:text-base" />
        </div>
      </div>
    </div>
  );
};

export default ButtonUtama;
