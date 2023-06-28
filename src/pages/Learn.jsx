import React from "react";
import Sublearn from "../components/Sublearn";

function Learn() {
  return (
    <div className="bg-white min-h-screen">
      <div className="flex flex-col max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 gap-4">
        <div className="flex flex-col text-center gap-2">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">Belajar</h1>
          <p className="text-xl text-gray-600">Membaca dan Mengenal Angka & Huruf</p>
        </div>
        <div className="flex justify-center gap-1">
          <div className="flex flex-col w-fit gap-1">
            {/* ===Blok-1=== */}
            <Sublearn text="Rumah Adat Balla Lompoa" path="/belajar/ballalompoa" />
            <Sublearn text="Rumah Adat Sauraja" path="/belajar/sauraja" />
            <Sublearn text="Rumah Adat Boyang" path="/belajar/boyang" />
            <Sublearn text="Rumah Adat Tongkonan" path="/belajar/tongkonan" />
            <Sublearn text="Rumah Adat Jangkanae" path="/belajar/jangkanae" />
            <Sublearn text="Rumah Adat Balla To Kajang" path="/belajar/ballatokajang" />
          </div>

          <div className="flex flex-col w-fit gap-1">
            {/* ===Blok-2=== */}
            <Sublearn text="Kapurung" path="/belajar/kapurung" />
            <Sublearn text="Es Pisang Ijo" path="/belajar/espisangijo" />
            <Sublearn text="Buras" path="/belajar/buras" />
            <Sublearn text="Pisang Eppe" path="/belajar/pisangeppe" />
            <Sublearn text="Palekko" path="/belajar/palekko" />
            <Sublearn text="Mie Titi" path="/belajar/mietiti" />
            <Sublearn text="Soto Konro" path="/belajar/sotokonro" />
          </div>

          <div className="flex flex-col w-fit gap-1">
            {/* ===Blok-3=== */}
            <Sublearn text="Jeneponto" path="/belajar/jeneponto" />
            <Sublearn text="Bantaeng" path="/belajar/bantaeng" />
            <Sublearn text="Luwu" path="/belajar/luwu" />
            <Sublearn text="Palopo" path="/belajar/palopo" />
            <Sublearn text="Pinrang" path="/belajar/pinrang" />
            <Sublearn text="Toraja" path="/belajar/toraja" />
            <Sublearn text="Wajo" path="/belajar/wajo" />
          </div>

          <div className="flex flex-col w-fit gap-1">
            {/* ===Blok-4=== */}
            <Sublearn text="Baju Pokko" path="/belajar/pokko" />
            <Sublearn text="Baju Seppa Tallung" path="/belajar/seppatallung" />
            <Sublearn text="Baju Bodo" path="/belajar/bodo" />
            <Sublearn text="Baju Bella Dada" path="/belajar/belladada" />
            <Sublearn text="Baju Pattuqduq Towaine" path="/belajar/pattuqduqtowaine" />
            <Sublearn text="Baju Labbu" path="/belajar/labbu" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
