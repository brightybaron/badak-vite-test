import Navbar from "../elements/Navbar";
import Footer from "../elements/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[175px]"></div>
      <div className="container mx-auto px-4 sm:px-12 ">
        <div className="flex flex-wrap mx-auto my-4">
          <div className="grow-0 shrink-0 basis-auto sm:w-4/12 w-full">
            <img
              src="/img/logo2.png"
              alt="About Us"
              className="w-fit h-auto sm:mb-0 mb-4 sm:ms-auto mx-auto sm:p-0 p-4"
            />
          </div>
          <div className="grow-0 shrink-0 basis-auto sm:w-7/12 w-full">
            <p className="text-3xl font-bold">About Us</p>
            <p className="mt-4 w-full mx-auto mb-8">
              Berdiri sejak awal September 2018, Badak Gunung Adventure bergerak
              dalam bidang pariwisata yang beroperasi di Malang. Biro wisata ini
              dibentuk oleh beberapa nama yang berdedikasi dengan profesional
              tinggi dalam bidang pariwisata dan pengetahuan terhadap setiap
              destinasi yang menjadi wilayah layanan wisata di Badak Gunung
              Adventure.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap mx-auto my-4">
          <div className="grow-0 shrink-0 basis-auto sm:w-4/12 w-full">
            <p className="text-2xl underline font-medium mb-2">Our Office</p>
            <p className="text-xl">Poncokusumo, Kab. Malang</p>
            <table className="table-fixed border-separate border-spacing-x-2 border-spacing-y-1 border-gray-300 mt-4">
              <tbody>
                <tr>
                  <td className="flex self-top">
                    <i className="bi bi-geo-alt-fill"></i>
                  </td>
                  <td>Poncokusumo, Kab. Malang</td>
                </tr>
                <tr>
                  <td>
                    <i className="bi bi-telephone"></i>
                  </td>
                  <td>0851 5727 6433</td>
                </tr>
                <tr>
                  <td>
                    <i className="bi bi-envelope"></i>
                  </td>
                  <td>rekayodolan@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grow-0 shrink-0 basis-auto sm:w-7/12 w-full sm:mt-0 mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1763.5046995945547!2d112.4325903846828!3d-7.13362110691593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDgnMDAuNiJTIDExMsKwMjUnNTcuNCJF!5e0!3m2!1sen!2sid!4v1703052757861!5m2!1sen!2sid"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
