import React from "react";

function Footer() {
  return (
    <div className="w-full items-center justify-center mx-auto ">
      <div className="flex  bg-gray-300 items-center align-middle justify-center py-9 px-3">
        <div className="flex items-center gap-3">
          <img src={process.env.PUBLIC_URL + "/images/logo1.png"} alt="Logo Unhas" className="h-10 w-auto" />
          <img src={process.env.PUBLIC_URL + "/images/logo2.png"} alt="Logo Kemendikbud" className="h-10 w-auto" />
          <img src={process.env.PUBLIC_URL + "/images/logo3.png"} alt="Logo Kampus Merdeka" className="h-10 w-auto" />
          <img src={process.env.PUBLIC_URL + "/images/logo4.png"} alt="Logo PKM" className="h-10 w-auto" />
          <img src={process.env.PUBLIC_URL + "/images/logo5.png"} alt="Logo Simbelmawa" className="h-10 w-auto" />
        </div>
      </div>
      <footer className="flex align-middle items-center justify-center p-4 midnight bg-white shadow md:px-6 md:py-8 dark:bg-midnight">
        <span className="block text-sm text-white sm:text-center dark:text-white">
          © 2023{" "}
          <a href="/https://www.instagram.com/lamaccamonopoli.mks/" target="_blank" className="hover:underline ">
            Lamaccamonopoli.mks
          </a>
        </span>
      </footer>
    </div>
  );
}

export default Footer;
