import DetailPaket from "../../elements/DetailPaket";
import HeroPaket from "../../elements/HeroPaket";
import Navbar from "../../elements/Navbar";
import Footer from "../../elements/Footer";

const TumpakBromoPage = () => {
  const dataTab = [
    {
      hero: "/img/tumpaksewu.jpg",
      judul: "Tumpak Sewu dan Bromo Midnight",
      mulai: "Hari Pertama, 04.00 WIB",
      akhir: "Hari Kedua, 12.00 WIB",
      durasi: "1",
      baseprice: "400.000",
      destinasi: [
        "Air Terjun Tumpak Sewu",
        "Goa Tetes",
        "Telaga Biru",
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
        "Snack dan air mineral",
        "Transport City Car",
        "Local Guide",
        "Tiket Masuk Wisata",
        "Personal Photographer (untuk paket dokumentasi)",
        "100 HQ Edited Photos (untuk paket dokumentasi)",
      ],
      fasilitasExclude: [
        "Transportasi dari dan/atau menuju Kota Malang",
        "Penginapan (Hotel / Homestay)",
        "Biaya pribadi",
        "Sewa kuda / jaket di Bromo",
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
        "16.30 Tiba di Kota Malang, persiapan Bromo Midnight Trip",
      ],
      itinDua: [
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
      biayaNonDokumentasi: [
        {
          pax: "6",
          price: "450.000",
        },
        {
          pax: "5",
          price: "520.000",
        },
        {
          pax: "4",
          price: "625.000",
        },
        {
          pax: "3",
          price: "799.000",
        },
        {
          pax: "2",
          price: "1.149.000",
        },
      ],
      biayaDokumentasi: [
        {
          pax: "6",
          price: "900.000",
        },
        {
          pax: "5",
          price: "920.000",
        },
        {
          pax: "4",
          price: "1.120.000",
        },
        {
          pax: "3",
          price: "1.460.000",
        },
        {
          pax: "2",
          price: "2.149.000",
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
        <p key="2" className="mb-2">
          Kemudian dilanjutkan dengan Trip Wisata Gunung Bromo untuk kamu yang
          ingin menikmati keindahan Gunung Bromo.
        </p>,
        <p key="3">
          Note: Tidak disarankan untuk usia <strong>di bawah 10 tahun</strong>{" "}
          dan <strong>di atas 60 tahun</strong>.
        </p>,
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <HeroPaket
        judul={"Air Terjun Tumpak Sewu" + "," + " dan Bromo Midnight"}
        heroPaket={dataTab[0].hero}
      />
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

export default TumpakBromoPage;
