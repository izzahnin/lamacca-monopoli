import React from "react";
import { Link } from "react-router-dom";

function Learn() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">Belajar</h1>
          <p className="mt-4 text-xl text-gray-600">Pengenalan Huruf, angka, dongeng</p>
        </div>
      </div>
      {/* sesi list blok */}
      <div className="flex max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        {/* <h1 className="font-bold text-8xl justify-center text-center text-mandarin">A</h1> */}
        {/* Balla Lompoa */}
        <div className="flex flex-col w-fit">
          <Link to="/belajar/ballalompoa" className="w-60 h-20 bg-mandarin rounded-lg flex items-center justify-center text-white">
            Rumah Adat Balla Lompoa
          </Link>
          <Link to="/belajar/saoraja" className="w-60 h-20 bg-mandarin rounded-lg flex items-center justify-center text-white">
            Rumah Adat Saoraja
          </Link>
          <Link to="/belajar/boyang" className="w-60 h-20 bg-mandarin rounded-lg flex items-center justify-center text-white">
            Rumah Adat Boyang
          </Link>
          <Link to="/belajar/tongkonan" className="w-60 h-20 bg-mandarin rounded-lg flex items-center justify-center text-white">
            Rumah Adat Tongkonan
          </Link>
          <Link to="/belajar/langkanae" className="w-60 h-20 bg-mandarin rounded-lg flex items-center justify-center text-white">
            Rumah Adat Langkanae
          </Link>
          <Link to="/belajar/ballatokajang" className="w-60 h-20 bg-mandarin rounded-lg flex items-center justify-center text-white">
            Rumah Adat Balla To Kajang
          </Link>
        </div>

        {/* ===BLOK-2=== */}
        <div className="flex flex-col w-fit">
          <Link to="/belajar/ballalompoa" className="w-60 h-20 bg-mandarin rounded-lg flex items-center justify-center text-white">
            Rumah Adat Balla Lompoa
          </Link>
          <Link to="/belajar/saoraja" className="w-60 h-20 bg-mandarin rounded-lg flex items-center justify-center text-white">
            Rumah Adat Saoraja
          </Link>
          <Link to="/belajar/boyang" className="w-60 h-20 bg-mandarin rounded-lg flex items-center justify-center text-white">
            Rumah Adat Boyang
          </Link>
          <Link to="/belajar/tongkonan" className="w-60 h-20 bg-mandarin rounded-lg flex items-center justify-center text-white">
            Rumah Adat Tongkonan
          </Link>
          <Link to="/belajar/langkanae" className="w-60 h-20 bg-mandarin rounded-lg flex items-center justify-center text-white">
            Rumah Adat Langkanae
          </Link>
          <Link to="/belajar/ballatokajang" className="w-60 h-20 bg-mandarin rounded-lg flex items-center justify-center text-white">
            Rumah Adat Balla To Kajang
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Learn;
