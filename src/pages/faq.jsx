import Navbar from "../elements/Navbar";
import Accordion from "../elements/Accordion";
import Footer from "../elements/Footer";

const FaqPage = () => {
  const accordionItemsFaq = [
    {
      title: "Apakah ada biaya tambahan selain harga yang tertera di paket?",
      content:
        "Tidak ada, kami memaparkan harga yang sesungguhnya dalam layanan kami. Adapun biaya tambahan adalah biaya yang anda keluarkan untuk fasilitas tambahan di luar fasilitas yang kami berikan dan tambahan biaya pada periode high season.",
    },
    {
      title: "Apakah itinerari bersifat mengikat peserta?",
      content:
        "Tidak, itinerari digunakan sebagai gambaran umum mengenai waktu dan destinasi yang akan dituju. Pelaksanaan itinerari sangat bergantung pada beberapa faktor seperti, kondisi alam, cuaca, kondisi lalu lintas, serta berbagai hal dapat mempengaruhi trip.",
    },
    {
      title: "Bagaimana cara reservasi trip di Badak Gunung?",
      content:
        "Cukup mudah, isi beberapa data diri melalui formulir booking yang tertera dan selesai. Tim kami akan segera melakukan verifikasi order.",
    },
    {
      title: "Bagaimana cara pembayarannya?",
      content:
        "Membayar uang muka/DP minimal 50% dari total tagihan ke rekening BCA - 023 999 2123 a.n Nalina Nuha Al-Hazmi atau dapat melunasinya sekaligus.",
    },
  ];

  const accordionItemsTnC = [
    {
      title: "Ketentuan dan Syarat Pembayaran",
      content: (
        <ol key="1">
          <li>
            1. Membayar uang muka/DP minimal 50% dari total tagihan ke rekening
            BCA – 023 999 2123 a.n Nalina Nuha Al-Hazmi atau dapat melunasinya
            sekaligus.
          </li>
          <li>
            2. Pelunasan biaya trip dibayarkan maksimal pada hari H sebelum
            berangkat trip.
          </li>
          <li>
            3. Badak Gunung berhak membatalkan trip dengan
            pertimbangan-pertimbangan tertentu di luar kemampuan kami dan uang
            DP peserta akan dikembalikan 100%.
          </li>
          <li>
            4. Jadwal acara/itinerary bisa berubah tergantung cuaca dan kondisi
            alam serta kondisi lalu lintas.
          </li>
        </ol>
      ),
    },
    {
      title: "Pembatalan dan Reschedule",
      content: (
        <ol key="2">
          <li>
            1. Tidak ada pengembalian uang muka/DP yang sudah dibayarkan oleh
            peserta trip yang membatalkan keikutsertaannya secara sepihak.
          </li>
          <li>
            2. <i>Reschedule</i> / pergantian jadwal trip diperkenankan,
            maksimal konfirmasi 7 hari sebelum keberangkatan. Kurang dari 7 hari
            peserta dianggap membatalkan trip secara sepihak.
          </li>
          <li>
            3. Jika terjadi pembatalan atau pergantian tanggal trip dikarenakan{" "}
            <i>force majeur</i> seperti bencana alam, penutupan tempat wisata
            atau sebab lain di luar kendali kami, maka biaya pendaftaran akan
            dikembalikan.
          </li>
          <li>
            4. Pembatalan dan penundaan trip hanya berlaku untuk jadwal trip{" "}
            <i>low season</i>.
          </li>
          <li>
            5. Pembatalan/penundaan trip pada <i>peak season</i>, uang muka tidak
            dapat di-<i>refund</i>.
          </li>
        </ol>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "175px" }} />
      <div className="container mx-auto my-4 w-11/12 sm:w-3/4">
        <h1 className="text-2xl font-bold mb-2">FAQ</h1>
        <Accordion items={accordionItemsFaq} />
        <h1 className="text-2xl font-bold mt-6 mb-2">Syarat dan Ketentuan</h1>
        <Accordion items={accordionItemsTnC} />
      </div>
      <Footer/>
    </>
  );
};

export default FaqPage;
