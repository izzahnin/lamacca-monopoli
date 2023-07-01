import React from "react";
import PhotoCard from "../components/PhotoCard";
import "./global.css";

function About() {
  return (
    // bg-white dasar
    <div className="">
      <div className="  min-h-fit gap-4">
        <div className="flex flex-col justify-center align-middle max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 gap-4">
          <div className="flex flex-col align-middle text-center gap-4 ">
            <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-navy border-2 rounded-full text-center w-fit py-2 px-4 m-auto">Meet our team</h1>
            <p className="text-lg w-64 m-auto sm:w-full">Yuk kenal dengan tim Lamacca Monopoli</p>
          </div>

          <div className="flex flex-col justify-center align-middle items-center gap-4 sm:flex-row md:flex-row">
            {/* baris */}
            <div className="flex flex-col w-52 sm:w-52 md:w-52 bg-gray-50 p-0 shadow-md">
              <div className="flex flex-col justify-end items-center  h-60 w-52 sm:w-52 md:w-52 bg-cover bg-center latar">
                <div className="flex flex-col align-middle text-center border-2 rounded-full h-15 p-1 mb-2 w-52 sm:w-48 md:w-48 bg-white border-navy ">
                  <p className="text-navy font-semibold text-xs md:text-xs  sm:text-xs">M. Bayu Mario. S.P.,MP., M.Sc</p>
                  <p className="text-gray-600 text-xs md:text-xs sm:text-xs">Dosen Pendamping</p>
                </div>
              </div>
            </div>
            <PhotoCard src="/images/ketua.png" alt="Dewi" name="Dewi" role="Ketua Tim" />
          </div>
          {/* anggota */}
          <div className="flex flex-col justify-center align-middle items-center gap-4 sm:flex-col md:flex-col lg:flex-row">
          <div className="flex flex-col justify-center align-middle items-center gap-4 sm:flex-row md:flex-row">
            <PhotoCard src="/images/anggota2.png" alt="Eka Lukman" name="Eka Lukman" role="Anggota 1" />
            <PhotoCard src="/images/anggota4.png" alt="Teguh Daniel" name="Teguh Daniel" role="Anggota 2" />

          </div>
          <div className="flex flex-col justify-center align-middle items-center gap-4 sm:flex-row md:flex-row">
            
            <PhotoCard src="/images/anggota3.png" alt="Nurul Izzah" name="Nurul Izzah" role="Anggota 3" />
            <PhotoCard src="/images/anggota5.png" alt="Zaidul. S" name="Zaidul. S" role="Anggota 4" />
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default About;
