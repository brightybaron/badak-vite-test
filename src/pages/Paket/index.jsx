import Navbar from "../../elements/Navbar";
import Card from "../../elements/Card";
import Footer from "../../elements/Footer";
import PropTypes from "prop-types";

const pageContent = [
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
    gambar: "/img/tumpaksewu.jpg",
    link: "/paket/tumpaksewu",
    harga: "Rp. 300.000",
    durasi: "1",
  },
  {
    id: 3,
    judul: "Tumpak Sewu dan Bromo Midnight Trip",
    gambar: "/img/tumpaksewu.jpg",
    link: "/paket/tumpak-bromo",
    harga: "Rp. 300.000",
    durasi: "1",
  },
  {
    id: 4,
    judul: "Explore Kawah Ijen",
    gambar: "/img/ijen1.jpg",
    link: "/paket/ijen",
    harga: "Rp. 300.000",
    durasi: "1",
  },
  {
    id: 5,
    judul: "Kawah Ijen dan TN Baluran",
    gambar: "/img/baluran.jpg",
    link: "/paket/ijen-baluran",
    harga: "Rp. 300.000",
    durasi: "1",
  },
];

const PaketPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[175px]"></div>
      <p className="text-center text-3xl font-bold">Paket Trip</p>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap my-4">
          {pageContent.map((pageContent) => (
            <div key={pageContent.id} className="w-full lg:w-1/3 md:w-1/2 px-4 py-2">
              <Card>
                <Card.Head link={pageContent.link} gambar={pageContent.gambar} />
                <Card.Body link={pageContent.link} judul={pageContent.judul} harga={pageContent.harga} />
                <Card.Footer link={pageContent.link} durasi={pageContent.durasi} />
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

PaketPage.propTypes = {
  pageContent: PropTypes.array,
};

export default PaketPage;
