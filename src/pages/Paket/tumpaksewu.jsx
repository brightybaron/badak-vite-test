import DetailPaket from "../../elements/DetailPaket";
import HeroPaket from "../../elements/HeroPaket";
import Navbar from "../../elements/Navbar";
import Footer from "../../elements/Footer";

const TumpakPage = () => {
  const dataTab = [
    {
      hero: "/img/tumpaksewu.jpg",
      judul: "Air Terjun Tumpak Sewu",
      mulai: "04.30 WIB",
      akhir: "17.00 WIB",
      durasi: "1",
      baseprice: "250.000",
      destinasi: [
        "Air Terjun Tumpak Sewu",
        "Goa Tetes",
        "Goa Bidadari",
        "Telaga Biru",
      ],
      fasilitasInclude: [
        "Transport City Car",
        "Local Guide",
        "Tiket Masuk Wisata",
        "Snack & Mineral Water",
        "Personal Photographer (untuk paket dokumentasi)",
        "100 HQ Edited Photos (untuk paket dokumentasi)",
      ],
      fasilitasExclude: [
        "Transportasi dari dan/atau menuju Kota Malang",
        "Penginapan (Hotel / Homestay)",
        "Biaya pribadi",
      ],
      itinSatu: [
        "04.00 Penjemputan peserta trip di Kota Malang",
        "04.30 Perjalanan menuju Air Terjun Tumpak Sewu - Lumajang",
        "06.00 Tiba di rest area Tumpak Sewu, persiapan trekking",
        "06.15 Explore area Air Terjun Tumpak Sewu hingga aliran sungai",
        "09.00 Explore area Goa Tetes",
        "10.00 Perjalanan kembali menuju rest area",
        "11.00 Tiba di reset area, istirahat dan bersih diri",
        "14.00 Perjalanan kembali ke Malang",
        "16.30 Tiba di Kota Malang, perjalanan berakhir. Sayonara !",
      ],
      itinDua :[],
      biayaNonDokumentasi: [
        {
          pax: "6",
          price: "250.000",
        },
        {
          pax: "5",
          price: "280.000",
        },
        {
          pax: "4",
          price: "330.000",
        },
        {
          pax: "3",
          price: "410.000",
        },
        {
          pax: "2",
          price: "620.000",
        },
      ],
      biayaDokumentasi: [
        {
          pax: "6",
          price: "425.000",
        },
        {
          pax: "5",
          price: "490.000",
        },
        {
          pax: "4",
          price: "590.000",
        },
        {
          pax: "3",
          price: "780.000",
        },
        {
          pax: "2",
          price: "1.150.000",
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
          Paket Trip Air Terjun Tumpak Sewu akan membawa kamu mengunjungi dan
          menikmati kemegahan Air Terjun Tumpak Sewu di Lumajang. Paket Trip Air
          Terjun Tumpak Sewu ini kami rekomendasikan untuk kamu yang senang
          dengan petualangan yang memacu adrenalin. Untuk menikmati
          keindahannya, kamu bisa berjalan kaki dengan menyusuri aliran sungai
          sepanjang kurang lebih 4 KM dengan medan yang beraneka ragam.
        </p>,
        <p key="2">
          Note: Tidak disarankan untuk anak usia di bawah 10 tahun dan orang tua
          di atas 60 tahun.
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

export default TumpakPage;
