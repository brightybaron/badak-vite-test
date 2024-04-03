const Footer = () => {
  return (
    <footer className="container mx-auto px-4 mt-8">
      <div className="flex flex-wrap mx-0.5 gap-x-6 justify-between">
        <div className="grow shrink-0 basis-0 h-fit w-fit max-w-full py-1">
          <p className="font-semibold mb-3 text-lg underline decoration-solid decoration-1 decoration-slate-400">Hubungi kami</p>
          <p className="mb-2">
            <i className="bi bi-whatsapp"></i>
            <a href="https://wa.me/6285157276433/?text=Hi%20Badak%20Gunung!%20Saya%20mau%20tanya%20tentang" target="_blank">
              &nbsp;+62 852 2682 2944
            </a>
          </p>
          <p className="mb-2">
            <i className="bi bi-instagram"></i>
            <a href="https://www.instagram.com/badakgunung/" target="_blank">
              &nbsp;Badak Gunung
            </a>
          </p>
          <p className="mb-2">
            <i className="bi bi-geo-alt-fill"></i>
            <a href="#" target="_blank">
              &nbsp;Poncokusumo, Kab. Malang, Jawa TImur
            </a>
          </p>
        </div>
      </div>
      <p className="text-xl mt-4 mb-2">&copy; 2024 - Badak Gunung</p>
    </footer>
  );
};

export default Footer;