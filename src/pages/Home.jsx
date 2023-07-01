import React from "react";
import "./global.css";

function Home() {
  return (
    <div className="bg-white min-h-fit">
      <div className="flex flex-col bg-white max-w-screen mx-auto py-14 px-4 sm:px-6 lg:px-8 gap-20">
        <div className="text-center justify-center mx-auto align-middle max-w-4xl">
          <h1 className="text-4xl font-extrabold text-navy sm:text-5xl md:text-6xl">
            Lamacca <span className="text-aqua">Monopoli</span>
          </h1>
          <p className="mt-4 text-xl text-navy">Meningkatkan Literasi Anak Putus Sekolah Berbasis QR Code dan Paupau RiKadong Sebagai Solusi Pengentasan Buta Aksara Kota Makassar</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center align-middle bg-navy max-w-screen h-fit p-5 text-white gap-5">
        <img className="w-72" src={process.env.PUBLIC_URL + "/images/animasi2.svg"} alt="" />
        <img className="w-96" src={process.env.PUBLIC_URL + "/images/monopoli.png"} alt="" />
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Home;
