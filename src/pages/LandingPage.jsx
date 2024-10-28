import NavBar from "../component/Navbar";
import CardAktivitas from "../component/CardAktivitas";
import CardDaerah from "../component/CardDaerah";
import { daerahList } from "../data/Daerah";
import { aktivitasList } from "../data/Aktivitas";
const LandingPage = () => {
  return (
    <>
      <NavBar />
      <section
        className="mx-5 px-7 lg:h-screen h-96 bg-cover bg-center lg:mx-10 rounded-3xl flex items-center justify-center lg:px-12"
        style={{ backgroundImage: "url('images/header.svg')" }}
      >
        <div className="text-center max-w-5xl">
          <p className="text-white text-2xl md:text-3xl lg:text-5xl font-medium">
            Agriculture is our wisest pursuit, because it will in the end
            contribute most to real wealth, good morals & happiness.
          </p>

          {/* Button di bawah teks */}
          <div className="lg:mt-20 mt-7">
            <input
              type="text"
              placeholder="Cari Wisata"
              className="px-6 py-3 text-black border border-gray-300 rounded-full w-full md:w-[400px] lg:w-[500px] focus:outline-none focus:border-gray-500"
            />
          </div>
        </div>
      </section>

      <section className="mx-7 sm:mt-20 mt-14 md:mx-10 lg:mx-14 md:mt-28">
        <div>
          <p className="text-xl font-bold sm:text-3xl md:text-4xl">
            Aktivitas Populer
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-start sm:mt-7 mt-5 md:mt-10">
          <img
            className="rounded-2xl md:mr-7 lg:mr-8"
            src="/public/images/green_garden.svg"
            alt=""
          />
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center sm:mt-10 md:mt-10 mt-5 lg:mt-0 ">
                <div className="py-1 px-4 bg-hijau w-auto rounded-full">
                  <p className="text-center sm:text-2xl font-semibold md:text-2xl lg:text-2xl">
                    Green
                  </p>
                </div>
                <div className="ml-1">
                  <p className="font-semibold sm:text-2xl md:text-2xl lg:text-2xl">
                    Garden, Malang
                  </p>
                </div>
              </div>

              <div className="mt-2 sm:mt-5">
                <p className="text-sm sm:text-lg md:text-lg lg:text-lg">
                  Nikmati pengalaman seru memetik apel jenis manalagi dan apel
                  anna langsung dari pohonnya! Apel manalagi yang segar dan
                  manis, serta apel anna dengan rasa asam segar yang dipetik
                  sendiri. Rasakan kesegaran buah apel yang baru saja dipetik,
                  sambil menikmati pemandangan perkebunan yang memukau.
                </p>
              </div>
            </div>
            <div className="flex mt-5 ">
              <button className="bg-hijau-tua text-xs md:px-4 md:text-xs md:py-3 text-white py-2 px-3 rounded-full">
                Selengkapnya
              </button>
              <button className="text-xs bg-hijau-tua ml-1 py-2 text-white px-4 rounded-full border">
                y
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 sm:mt-14 mx-7 md:mt-10 md:mx-10 lg:mx-14 ">
        <div className="grid grid-cols-2 md:flex lg:justify-between lg:p-1 ">
          <div className="hidden md:hidden lg:flex lg:justify-between lg:w-full lg:gap-3">
            {aktivitasList.map((wisata, index) => (
              <CardAktivitas
                key={index}
                title={wisata.title}
                description={wisata.description}
                image={wisata.image}
                price={wisata.price}
                // Pastikan untuk menambahkan properti ini
              />
            ))}
          </div>
        </div>

        <div className="carousel  carousel-center max-w-full py-2 px-2 lg:hidden ">
          <div className="carousel-item gap-3">
            {aktivitasList.map((wisata, index) => (
              <CardAktivitas
                key={index}
                title={wisata.title}
                description={wisata.description}
                image={wisata.image}
                price={wisata.price}
                // Pastikan untuk menambahkan properti ini
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-7  mt-14 md:mt-10 lg:mt-28 md:mx-10 lg:mx-14">
        <div>
          <h1 className="text-xl sm:text-3xl font-bold md:text-4xl">
            Eksplor Daerah Wisata <br />
            di Indonesia
          </h1>
        </div>

        <div className="mt-7 md:mx-0 gap-3 flex flex-wrap lg:gap-10 lg:p-1 lg:mt-16">
          {/* Kartu yang muncul secara horizontal di layar besar */}
          <div className="hidden md:hidden lg:flex lg:justify-between lg:w-full lg:gap-3">
            {daerahList.map((daerah, index) => (
              <CardDaerah
                key={index}
                title={daerah.title}
                description={daerah.description}
                image={daerah.image} // Pastikan untuk menambahkan properti ini
              />
            ))}
          </div>
        </div>

        <div className="carousel carousel-center max-w-full space-x-3 px-8 py-1 lg:hidden ">
          <div className="carousel-item gap-3">
            {daerahList.map((daerah, index) => (
              <CardDaerah
                key={index}
                title={daerah.title}
                description={daerah.description}
                image={daerah.image}
                // Pastikan untuk menambahkan properti ini
              />
            ))}
          </div>
        </div>

        <div className="mt-7 lg:mt-14">
          <button className="text-[0.5rem] py-2 px-3 md:text-sm lg:text-sm border border-black rounded-full">
            Lihat Semua Daerah
          </button>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
