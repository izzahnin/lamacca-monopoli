import React from "react";

function About() {
  return (
    <div className=" bg-white min-h-screen">
      <div className="flex flex-col justify-center align-middle max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col align-middle text-center gap-4">
          <h1 className="text-2xl font-extrabold text-midnight sm:text-3xl md:text-3xl">Tentang Kami</h1>

          <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-midnight border-2 rounded-full text-center w-fit py-2 px-4 m-auto">Meet our team</h1>
        </div>
        <div>
          <p className="mt-4 text-xl text-gray-600 text-center">akan berisikan seluruh anggota tim pkm dan dosen pendamping</p>
        </div>
      </div>


      <div className="flex flex-col justify-center align-middle max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-4 sm:flex-col md:flex-row"> 
      <div className="relative flex flex-col w-48 sm:w-32 md:w-40 bg-gray-50 p-0">
            <img className="w-48 sm:w-32 md:w-40" src={process.env.PUBLIC_URL + "/images/anggota31.png"} alt="anggota1" />
            <div className="flex flex-col align-middle text-center border-2 rounded-full  m-auto w-full bg-white border-midnight ">
              <p className="text-midnight font-semibold text-xs  sm:text-sm">M. Bayu Mario. S.P., MP., M.Sc</p>
              <p className="text-gray-600 text-sm  sm:text-base">Dosen Pendamping</p>
            </div>
          </div>
      </div>
      <div className="flex flex-col justify-center align-middle max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-4 sm:flex-col md:flex-row">
        {/* kolom */}
        <div className="flex flex-col justify-center align-middle items-center gap-4 sm:flex-row md:flex-row">
          {/* baris */}
          <div className="relative flex flex-col w-48 sm:w-32 md:w-40 bg-gray-50 p-0">
            <img className="w-48 sm:w-32 md:w-40" src={process.env.PUBLIC_URL + "/images/anggota31.png"} alt="anggota1" />
            <div className="flex flex-col align-middle text-center border-2 rounded-full  m-auto w-full bg-white border-midnight ">
              <p className="text-midnight font-semibold text-base  sm:text-lg">Dewi</p>
              <p className="text-gray-600 text-sm  sm:text-base">Ketua Tim</p>
            </div>
          </div>
          {/*  */}
          <div className="relative flex flex-col w-48 sm:w-32 md:w-40 bg-gray-50 p-0">
            <img className="w-48 sm:w-32 md:w-40" src={process.env.PUBLIC_URL + "/images/anggota31.png"} alt="anggota1"/>
            <div className="flex flex-col align-middle text-center border-2 rounded-full  m-auto w-full bg-white border-midnight ">
              <p className="text-midnight font-semibold text-base sm:text-lg">Eka Lukman</p>
              <p className="text-gray-600 text-sm  sm:text-base">Anggota 1</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center align-middle items-center gap-4 sm:flex-row md:flex-row">
          {/* baris */}
          <div className="relative flex flex-col w-48 sm:w-32 md:w-40 bg-gray-50 p-0">
            <img className="w-48 sm:w-32 md:w-40" src={process.env.PUBLIC_URL + "/images/anggota31.png"} alt="anggota 2" />
            <div className="flex flex-col align-middle text-center border-2 rounded-full  m-auto w-full bg-white border-midnight ">
              <p className="text-midnight font-semibold text-base  sm:text-lg">Nurul Izzah</p>
              <p className="text-gray-600 text-sm  sm:text-base">Anggota 2</p>
            </div>
          </div>
          {/*  */}
          <div className="relative flex flex-col w-48 sm:w-32 md:w-40 bg-gray-50 p-0">
            <img className="w-48 sm:w-32 md:w-40" src={process.env.PUBLIC_URL + "/images/anggota31.png"} alt="anggota 3" />
            <div className="flex flex-col align-middle text-center border-2 rounded-full  m-auto w-full bg-white border-midnight ">
              <p className="text-midnight font-semibold text-base  sm:text-lg">Zaidul. S</p>
              <p className="text-gray-600 text-sm  sm:text-base">Anggota 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
