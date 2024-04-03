import DetailPaket from "../../elements/DetailPaket";
import HeroPaket from "../../elements/HeroPaket";
import Navbar from "../../elements/Navbar";
import Footer from "../../elements/Footer";

const BromoPage = () => {
  const dataTab = [
    {
      hero: "/img/hero2.jpg",
      judul: "Bromo Midnight Trip",
      mulai: "00.30 WIB",
      akhir: "11.00 WIB",
      durasi: "1",
      baseprice: "300.000",
      destinasi: [
        "Sunrise View Point",
        "Bukit Widodaren",
        "Kawah Bromo",
        "Pura Luhur Poten",
        "Pasir Berbisik",
        "Savana",
        "Bukit Teletubbies",
      ],
      fasilitasInclude: [
        "Jeep Bromo 4x4 Hardtop",
        "Tiket masuk",
        "Snack dan air mineral",
      ],
      fasilitasExclude: [
        "Transportasi dari dan/atau menuju Kota Malang",
        "Penginapan (Hotel / Homestay)",
        "Biaya pribadi",
        "Sewa kuda / jaket di Bromo",
      ],
      itinSatu: [
        "00.01 Penjemputan peserta trip di Kota Malang",
        "00.30 Perjalanan menuju Bromo dengan mobil hardtop 4x4",
        "03.00 Tiba di Sunrise View Point, istirahat dan adaptasi suhu udara",
        "04.30 Menikmati matahari terbit di Sunrise View Point",
        "06.00 Menuju Bukit Widodaren",
        "07.00 Menuju Kawah Bromo & Pura Luhur Poten",
        "08.00 Menuju Lautan Pasir",
        "09.00 Menuju Savanna dan Bukit Teletubbies",
        "10.00 Explore Bromo berakhir, perjalanan kembali menuju Malang",
        "12.00 Tiba di Kota Malang, perjalanan berakhir. Sayonara !",
      ],
      itinDua : [],
      biayaNonDokumentasi: [
        {
          pax: "6",
          price: "355.000",
        },
        {
          pax: "5",
          price: "420.000",
        },
        {
          pax: "4",
          price: "510.000",
        },
        {
          pax: "3",
          price: "665.000",
        },
        {
          pax: "2",
          price: "975.000",
        },
      ],
      biayaDokumentasi: [
        {
          pax: "6",
          price: "285.000",
        },
        {
          pax: "5",
          price: "335.000",
        },
        {
          pax: "4",
          price: "455.000",
        },
        {
          pax: "3",
          price: "520.000",
        },
        {
          pax: "2",
          price: "750.000",
        },
      ],
      isiGaleri: [
        "/img/bromo1.jpg",
        "/img/bromo2.jpg",
        "/img/bromo3.jpg",
        "/img/bromo4.jpg",
      ],
      deskripsi: [
        <p key="1" className="mb-2">
          <strong>
            Exploring the fascinating landscape of Mountain Bromo by riding 4x4
            vehicle. Take amount of pictures with breathtaking views in the
            background.
          </strong>
        </p>,
        <p key="2" className="mb-2">
          Kamu dapat menikmati dan mengeksplorasi keindahan Gunung Bromo yang
          terkenal di Jawa Timur dengan mengikuti Paket Trip Wisata Gunung Bromo
          yang telah kami sediakan.
        </p>,
        <p key="3">
          Paket Trip Wisata Gunung Bromo ini cocok untuk kamu yang ingin
          menikmati keindahan Gunung Bromo dengan privasi yang terjaga.
        </p>,
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <HeroPaket judul={dataTab[0].judul} heroPaket={dataTab[0].hero} />
      <DetailPaket>
        <DetailPaket.Header
          judul={dataTab[0].judul}
          durasi={dataTab[0].durasi}
        />
        <DetailPaket.Body dataTab={dataTab} />
      </DetailPaket>
      <Footer />
    </>
  );
};

export default BromoPage;
