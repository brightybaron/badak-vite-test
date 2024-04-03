import DetailPaket from "../../elements/DetailPaket";
import HeroPaket from "../../elements/HeroPaket";
import Navbar from "../../elements/Navbar";
import Footer from "../../elements/Footer";

const IjenBaluranPage = () => {
  const dataTab = [
    {
      hero: "/img/baluran.jpg",
      judul: "Kawah Ijen dan TN Baluran",
      mulai: "00.30 WIB",
      akhir: "16.30 WIB",
      durasi: "1",
      baseprice: "375.000",
      destinasi: [
        "Kawah Ijen",
        "Blue Fire",
        "Sunrise View Point",
        "Taman Nasional Baluran",
        "Pantai Bama",
      ],
      mepo: "Banyuwangi Kota",
      fasilitasInclude: [
        "Transportasi selama tour",
        "Guide lokal",
        "Tiket masuk destinasi wisata",
        "Air mineral",
        "Foto dokumentasi",
      ],
      fasilitasExclude: [
        "Transportasi dari dan/atau menuju Banyuwangi",
        "Penginapan (Hotel / Homestay)",
        "Biaya pribadi",
        "Optional tour",
      ],
      itinSatu: [
        "23.30 Penjemputan peserta trip di Banyuwangi Kota",
        "00.00 Perjalanan menuju Paltuding",
        "01.30 Tiba di Paltuding",
        "01.45 Pendakian menuju puncak Ijen",
        "03.30 Explore Kawah Ijen (blue fire, kawah dan sunrise)",
        "06.30 Turun kembali menuju Paltuding",
        "08.00 Tiba di Paltuding (istirahat & sarapan)",
        "09.30 Perjalanan menuju Baluran & Pantai Bama",
        "11.00 Explore Baluran dan Pantai Bama",
        "15.00 Perjalanan menuju Kota Banyuwangi",
        "16.30 Tiba di Banyuwangi Kota, perjalanan berakhir. Sayonara !",
      ],
      itinDua: [],
      biayaNonDokumentasi: [],
      biayaDokumentasi: [
        {
          pax: "6",
          price: "375.000",
        },
        {
          pax: "5",
          price: "435.000",
        },
        {
          pax: "4",
          price: "535.000",
        },
        {
          pax: "3",
          price: "695.000",
        },
        {
          pax: "2",
          price: "1.010.000",
        },
      ],
      isiGaleri: [
        "/img/bromo1.jpg",
        "/img/bromo2.jpg",
        "/img/bromo3.jpg",
        "/img/bromo4.jpg",
      ],
      deskripsi: [],
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

export default IjenBaluranPage;
