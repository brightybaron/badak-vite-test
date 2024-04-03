import DetailPaket from "../../elements/DetailPaket";
import HeroPaket from "../../elements/HeroPaket";
import Navbar from "../../elements/Navbar";
import Footer from "../../elements/Footer";

const IjenPage = () => {
  const dataTab = [
    {
      hero: "/img/ijen1.jpg",
      judul: "Explore Kawah Ijen",
      mulai: "00.30 WIB",
      akhir: "11.00 WIB",
      durasi: "1",
      baseprice: "375.000",
      destinasi: ["Kawah Ijen", "Blue Fire", "Sunrise View Point"],
      mepo: "Banyuwangi Kota",
      fasilitasInclude: [
        "Transportasi selama tour",
        "Guide lokal",
        "Tiket masuk destinasi wisata",
        "Air mineral",
        "Foto dokumentasi",
        "Masker gas",
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
        "07.30 Menuju Air Terjun Jagir",
        "08.00 Explore Air Terjun Jagir",
        "09.00 Menuju kembali ke Banyuwangi Kota",
        "11.00 Tiba di Banyuwangi Kota, perjalanan berakhir. Sayonara !",
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
          price: "400.000",
        },
        {
          pax: "4",
          price: "425.000",
        },
        {
          pax: "3",
          price: "475.000",
        },
        {
          pax: "2",
          price: "675.000",
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

export default IjenPage;
