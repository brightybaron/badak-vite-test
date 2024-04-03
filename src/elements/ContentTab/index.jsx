import PropTypes from "prop-types";
import Galeri from "../Galeri";
import Accordion from "../Accordion";

const ContentTab = ({ children }) => {
  return <div className="container mx-auto py-2">{children}</div>;
};

const Tab1 = ({ tripmulai, tripakhir, deskripsi, mepo }) => {
  return (
    <>
      <table className="table-auto border-separate text-left w-full lg:w-3/4">
        <tbody>
          <tr>
            <th scope="row" className="font-semibold">
              Kategori
            </th>
            <td>Private Trip</td>
          </tr>
          <tr>
            <th scope="row" className="flex self-top font-semibold">
              Meeting Point
            </th>
            <td>{mepo || "Malang Kota (hotel, bandara, stasiun)"}</td>
          </tr>
          <tr>
            <th scope="row" className="flex self-top font-semibold">
              Waktu Mulai
            </th>
            <td>{tripmulai}</td>
          </tr>
          <tr>
            <th scope="row" className="flex self-top font-semibold">
              Waktu Berakhir
            </th>
            <td>{tripakhir}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-2">{deskripsi}</div>
    </>
  );
};

const Tab2 = ({ destinasi }) => {
  return (
    <div className="container mx-auto">
      <ul>
        {destinasi.map((item) => (
          <li key={item} className="list-disc list-inside">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Tab3 = ({ fasilitasInclude, fasilitasExclude }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap mx-0.5 gap-x-6 justify-between">
        <div className="grow-0 shrink-0 basis-auto h-fit w-fit sm:mb-0 mb-4">
          <p className="font-semibold mb-2 text-lg underline">Included</p>
          <ol>
            {fasilitasInclude.map((item) => (
              <li key={item} className="list-decimal list-inside">
                {item}
              </li>
            ))}
          </ol>
        </div>
        <div className="grow-0 shrink-0 basis-auto h-fit w-fit">
          <p className="font-semibold mb-2 text-lg underline">Excluded</p>
          <ol>
            {fasilitasExclude.map((item) => (
              <li key={item} className="list-decimal list-inside">
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
// !!!!!!!!!!!!!!!!!!!!!!!!! durung
const Tab4 = ({ biayaNonDokumentasi, biayaDokumentasi }) => {
  return (
    <>
      <div className="flex flex-wrap mx-0.5 gap-x-6 justify-center text-center">
        <div className="grow shrink-0 basis-0 h-fit w-fit max-w-full py-1">
          <li className="list-none">Tanpa Dokumentasi</li>
        </div>
        <div className="grow shrink-0 basis-0 h-fit w-fit max-w-full py-1">
          <li className="list-none">Paket Dokumentasi</li>
        </div>
      </div>
      <div className="flex flex-wrap mx-0.5 gap-x-6">
        <div className="grow shrink-0 basis-0 h-fit w-1/2 py-1">
          <table className="table-auto w-full text-center border border-gray-300">
            <thead>
              <tr>
                <th scope="col" className="border border-gray-300 bg-gray-200">
                  Peserta
                </th>
                <th scope="col" className="border border-gray-300 bg-gray-200">
                  Harga
                </th>
              </tr>
            </thead>
            <tbody>
              {biayaNonDokumentasi.map((item) => (
                <tr key={item.pax}>
                  <td className="border border-gray-300">{item.pax} pax</td>
                  <td className="border border-gray-300">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grow shrink-0 basis-0 h-fit w-1/2 py-1">
          <table className="table-auto w-full text-center border border-gray-300">
            <thead>
              <tr>
                <th scope="col" className="border border-gray-300 bg-gray-200">
                  Peserta
                </th>
                <th scope="col" className="border border-gray-300 bg-gray-200">
                  Harga
                </th>
              </tr>
            </thead>
            <tbody>
              {biayaDokumentasi.map((item) => (
                <tr key={item.pax}>
                  <td className="border border-gray-300">{item.pax} pax</td>
                  <td className="border border-gray-300">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-2 mb-0">
        *
        <small>
          <em>Lebih dari 6 orang, silakan hubungi kami</em>
        </small>
      </p>
    </>
  );
};
const Tab5 = ({ itinSatu, itinDua }) => {
  const itinDetail = [
    {
      title: "Day 1",
      content: (
        <ul>
          {itinSatu.map((item) => (
            <li key={item} className="list-disc list-inside">
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Day 2",
      content: (
        <ul>
          {itinDua.map((item) => (
            <li key={item} className="list-disc list-inside">
              {item}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="container mx-auto">
      <Accordion items={itinDetail} />
      <p className="mt-2 mb-0">
        *
        <small>
          <em>
            Itinerari hanya sebagai acuan dasar, pelaksanaannya bergantung pada
            berbagai faktor selama perjalanan.
          </em>
        </small>
      </p>
    </div>
  );
};
const Tab6 = ({ isiGaleri, judul }) => {
  return <Galeri isiGaleri={isiGaleri} judul={judul} />;
};

ContentTab.propTypes = {
  children: PropTypes.node.isRequired,
};

Tab1.propTypes = {
  tripmulai: PropTypes.string.isRequired,
  tripakhir: PropTypes.string.isRequired,
  deskripsi: PropTypes.node.isRequired,
  mepo: PropTypes.string,
};

Tab2.propTypes = {
  destinasi: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Tab3.propTypes = {
  fasilitasInclude: PropTypes.arrayOf(PropTypes.string).isRequired,
  fasilitasExclude: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Tab4.propTypes = {
  biayaNonDokumentasi: PropTypes.arrayOf(
    PropTypes.shape({
      pax: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ),
  biayaDokumentasi: PropTypes.arrayOf(
    PropTypes.shape({
      pax: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ),
};

Tab5.propTypes = {
  itinSatu: PropTypes.node,
  itinDua: PropTypes.node,
};

Tab6.propTypes = {
  isiGaleri: PropTypes.array.isRequired,
  judul: PropTypes.string.isRequired,
};

ContentTab.Tab1 = Tab1;
ContentTab.Tab2 = Tab2;
ContentTab.Tab3 = Tab3;
ContentTab.Tab4 = Tab4;
ContentTab.Tab5 = Tab5;
ContentTab.Tab6 = Tab6;

export default ContentTab;
