import HeroHome from "../elements/HeroHome";
import Navbar from "../elements/Navbar";
import Card from "../elements/Card";
import MyButton from "../fragments/MyButton";
import Footer from "../elements/Footer";

const details = [
  {
    id: 1,
    judul: "Bromo Midnight Trip",
    gambar: "/img/hero1.png",
    link: "/paket/bromo",
    harga: "Rp. 300.000",
    durasi: "1",
  },
  {
    id: 2,
    judul: "Air Terjun Tumpak Sewu",
    gambar: "/img/hero1.png",
    link: "/paket/tumpaksewu",
    harga: "Rp. 300.000",
    durasi: "1",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroHome />
      <div className="my-8">
        <p className="text-4xl text-center mb-8">Why Badak Gunung?</p>
        <div className="flex flex-wrap justify-center text-center px-4 gap-y-4">
          <div className="w-full sm:w-1/3 px-5">
            <div className="text-7xl">
              <i className="bi bi-cash-coin"></i>
            </div>
            <p className="font-bold text-2xl my-2">Save Money</p>
            <p>
              Dapatkan paket liburan yang <i>affordable</i> dengan fasilitas yang beragam
            </p>
          </div>
          <div className="w-full sm:w-1/3 px-5">
            <div className="text-7xl">
              <i className="bi bi-luggage-fill"></i>
            </div>
            <p className="font-bold text-2xl my-2">Stay Safe</p>
            <p>Kami pastikan setiap tamu yang berlibur dapat merasakan liburan yang aman dan nyaman</p>
          </div>
          <div className="w-full sm:w-1/3 px-5">
            <div className="text-7xl">
              <i className="bi bi-emoji-laughing"></i>
            </div>
            <p className="font-bold text-2xl my-2">Get Help</p>
            <p>
              Liburanmu akan terasa lebih menyenangkan dengan ditemani kru yang ramah dan <i>helpful</i>
            </p>
          </div>
        </div>
      </div>

      {/* Parallax */}
      <div className="sm:bg-fixed bg-scroll bg-cover bg-no-repeat bg-center h-[500px] bg-[url('/img/hero1.png')]"></div>

      <div className="container mx-auto px-4">
        <p className="text-4xl text-center my-8">Paket Kami</p>
        <div className="flex flex-wrap justify-around gap-4 sm:grow sm:shrink-0 sm:basis-0">
          {details.map((detail, index) => (
            <Card key={index}>
              <Card.Head gambar={detail.gambar} link={detail.link} />
              <Card.Body judul={detail.judul} link={detail.link} harga={detail.harga} />
              <Card.Footer durasi={detail.durasi} link={detail.link} />
            </Card>
          ))}
        </div>
        <div className="mt-4">
          <MyButton className={"w-fit py-2 px-4"} url="/paket">Paket Lainnya&nbsp;&gt;</MyButton>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
