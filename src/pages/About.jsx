import React from "react";

function About() {
  return (
    // bg-white dasar
    <div className=" bg-white min-h-screen gap-4">
      <div className="flex flex-col justify-center align-middle max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col align-middle text-center gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-midnight border-2 rounded-full text-center w-fit py-2 px-4 m-auto">Meet our team</h1>
        </div>
      </div>

      <div className="flex flex-col justify-center align-middle max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-4 sm:flex-col md:flex-row">
        <div className="flex flex-col justify-center align-middle items-center gap-4 sm:flex-row md:flex-row">
          {/* baris */}
          <div className="relative flex flex-col w-48 sm:w-32 md:w-48 bg-gray-50 p-0">
            <img className="w-48 sm:w-32 md:w-48" src={process.env.PUBLIC_URL + "/images/pendamping.png"} alt="M. Bayu" />
            <div className="flex flex-col align-middle text-center border-2 rounded-full  m-auto w-full bg-white border-midnight ">
              <p className="text-midnight font-semibold text-xs  sm:text-sm">M. Bayu Mario. S.P., MP., M.Sc</p>
              <p className="text-gray-600 text-sm  sm:text-base">Dosen Pendamping</p>
            </div>
          </div>
          <div className="relative flex flex-col w-48 sm:w-32 md:w-48 bg-gray-50 p-0">
            <img className="w-48 sm:w-32 md:w-48" src={process.env.PUBLIC_URL + "/images/ketua.png"} alt="Dewi" />
            <div className="flex flex-col align-middle text-center border-2 rounded-full  m-auto w-full bg-white border-midnight ">
              <p className="text-midnight font-semibold text-base  sm:text-lg">Dewi</p>
              <p className="text-gray-600 text-sm  sm:text-base">Ketua Tim</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center align-middle max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-4 sm:flex-col md:flex-row">
        <div className="flex flex-col justify-center align-middle items-center gap-4 sm:flex-row md:flex-row">
          {/* baris */}
          <div className="relative flex flex-col w-48 sm:w-32 md:w-48 bg-gray-50 p-0">
            <img className="w-48 sm:w-32 md:w-48" src={process.env.PUBLIC_URL + "/images/anggota2.png"} alt="Eka Lukman" />
            <div className="flex flex-col align-middle text-center border-2 rounded-full  m-auto w-full bg-white border-midnight ">
              <p className="text-midnight font-semibold text-base sm:text-lg">Eka Lukman</p>
              <p className="text-gray-600 text-sm  sm:text-base">Anggota 1</p>
            </div>
          </div>
          <div className="relative flex flex-col w-48 sm:w-32 md:w-48 bg-gray-50 p-0">
            <img className="w-48 sm:w-32 md:w-48" src={process.env.PUBLIC_URL + "/images/anggota31.png"} alt="anggota 2" />
            <div className="flex flex-col align-middle text-center border-2 rounded-full  m-auto w-full bg-white border-midnight ">
              <p className="text-midnight font-semibold text-base  sm:text-lg">Nurul Izzah</p>
              <p className="text-gray-600 text-sm  sm:text-base">Anggota 2</p>
            </div>
          </div>
          <div className="relative flex flex-col w-48 sm:w-32 md:w-48 bg-gray-50 p-0">
            <img className="w-48 sm:w-32 md:w-48" src={process.env.PUBLIC_URL + "/images/anggota5.png"} alt="Zaidul. S" />
            <div className="flex flex-col align-middle text-center border-2 rounded-full  m-auto w-full bg-white border-midnight ">
              <p className="text-midnight font-semibold text-base  sm:text-lg">Zaidul. S</p>
              <p className="text-gray-600 text-sm  sm:text-base">Anggota 3</p>
            </div>
          </div>
          <div className="relative flex flex-col w-48 sm:w-32 md:w-48 bg-gray-50 p-0">
            <img className="w-48 sm:w-32 md:w-48" src={process.env.PUBLIC_URL + "/images/anggota4.png"} alt="Teguh Daniel" />
            <div className="flex flex-col align-middle text-center border-2 rounded-full  m-auto w-full bg-white border-midnight ">
              <p className="text-midnight font-semibold text-base  sm:text-lg">Dewi</p>
              <p className="text-gray-600 text-sm  sm:text-base">Anggota 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
