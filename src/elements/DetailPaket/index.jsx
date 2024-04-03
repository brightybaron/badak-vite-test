import PropTypes from "prop-types";
import NavTab from "../NavTab";
import ContentTab from "../ContentTab";
import { Link } from "react-router-dom";

const DetailPaket = ({ children }) => {
  return <div className="container mx-auto px-6 min-h-[500px]">{children}</div>;
};

const Header = ({ judul, durasi }) => {
  return (
    <>
      <p className="text-3xl my-4 mx-0.5 font-semibold">{judul}</p>
      <div className="flex flex-wrap mx-0.5 gap-x-6 justify-between w-[calc(20rem+1.2vw)]">
        <div className="grow shrink-0 basis-0 text-center shadow-lg h-fit w-fit max-w-full py-1">
          <i className="bi bi-clock"></i>
          <p className="mb-0 text-sm">{durasi} Day</p>
        </div>
        <div className="grow shrink-0 basis-0 text-center shadow-lg h-fit w-fit max-w-full py-1">
          <i className="bi bi-calendar3"></i>
          <p className="mb-0 text-sm">Everyday</p>
        </div>
      </div>
    </>
  );
};

const Body = ({ dataTab }) => {
  const tabsData = [
    {
      label: "Highlight",
      content: (
        <ContentTab>
          <ContentTab.Tab1
            tripmulai={dataTab[0].mulai}
            tripakhir={dataTab[0].akhir}
            deskripsi={dataTab[0].deskripsi}
            mepo={dataTab[0].mepo}
          />
        </ContentTab>
      ),
    },
    {
      label: "Destinasi",
      content: (
        <ContentTab>
          <ContentTab.Tab2 destinasi={dataTab[0].destinasi} />
        </ContentTab>
      ),
    },
    {
      label: "Fasilitas",
      content: (
        <ContentTab>
          <ContentTab.Tab3
            fasilitasInclude={dataTab[0].fasilitasInclude}
            fasilitasExclude={dataTab[0].fasilitasExclude}
          />
        </ContentTab>
      ),
    },
    {
      label: "Harga",
      content: (
        <ContentTab>
          <ContentTab.Tab4
            biayaDokumentasi={dataTab[0].biayaDokumentasi}
            biayaNonDokumentasi={dataTab[0].biayaNonDokumentasi}
          />
        </ContentTab>
      ),
    },
    {
      label: "Itinerari",
      content: (
        <ContentTab>
          <ContentTab.Tab5
            itinSatu={dataTab[0].itinSatu}
            itinDua={dataTab[0].itinDua}
          />
        </ContentTab>
      ),
    },
    {
      label: "Galeri",
      content: (
        <ContentTab>
          <ContentTab.Tab6
            isiGaleri={dataTab[0].isiGaleri}
            judul={dataTab[0].judul}
          />
        </ContentTab>
      ),
    },
  ];

  return (
    <div className="flex flex-wrap mx-0.5 gap-x-2 justify-around mt-6">
      <div className="grow-0 shrink-0 basis-auto text-centers w-full sm:w-8/12">
        <NavTab tabs={tabsData} />
      </div>
      <div className="grow-0 shrink-0 basis-auto text-centers w-full sm:w-3/12 sm:mt-0 mt-4">
        <div className="h-auto bg-white py-4 border-y-2 border-black rounded text-center">
          <span>
            <i className="bi bi-tag">
              {" "}
              Mulai dari:&nbsp;
              <span className="font-semibold">Rp. {dataTab[0].baseprice}</span>
            </i>
          </span>
        </div>
        <Link
          className="inline-block text-center w-full mt-2 p-2 bg-teal-900 text-white rounded-full font-semibold"
          to={`https://wa.me/6285157276433/?text=Hi%20Badak%20Gunung!%20Saya%20mau%20tanya%20tentang%20${dataTab[0].judul}`}
          target="_blank"
        >
          Chat <i className="bi bi-whatsapp"></i>
        </Link>
      </div>
    </div>
  );
};

DetailPaket.propTypes = {
  children: PropTypes.node.isRequired,
};

Header.propTypes = {
  judul: PropTypes.string.isRequired,
  durasi: PropTypes.string.isRequired,
};

Body.propTypes = {
  dataTab: PropTypes.arrayOf(
    PropTypes.shape({
      mulai: PropTypes.string.isRequired,
      akhir: PropTypes.string.isRequired,
      destinasi: PropTypes.array.isRequired,
      fasilitasInclude: PropTypes.array.isRequired,
      fasilitasExclude: PropTypes.array.isRequired,
      itinSatu: PropTypes.array.isRequired,
      itinDua: PropTypes.array,
      biayaNonDokumentasi: PropTypes.array.isRequired,
      biayaDokumentasi: PropTypes.array.isRequired,
      isiGaleri: PropTypes.array.isRequired,
      judul: PropTypes.string.isRequired,
      deskripsi: PropTypes.node.isRequired,
      baseprice: PropTypes.string.isRequired,
      mepo: PropTypes.string,
    })
  ).isRequired,
};

DetailPaket.Header = Header;
DetailPaket.Body = Body;

export default DetailPaket;
