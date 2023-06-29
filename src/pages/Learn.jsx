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
        <div className="flex justify-center gap-2">
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex flex-col w-fit gap-2">
              {/* ===Blok-1=== */}
              <Sublearn color="bg-a" text="Rumah Adat Balla Lompoa" path="/belajar/ballalompoa" />
              <Sublearn color="bg-a" text="Rumah Adat Sauraja" path="/belajar/sauraja" />
              <Sublearn color="bg-a" text="Rumah Adat Boyang" path="/belajar/boyang" />
              <Sublearn color="bg-b" text="Rumah Adat Tongkonan" path="/belajar/tongkonan" />
              <Sublearn color="bg-b" text="Rumah Adat Jangkanae" path="/belajar/jangkanae" />
              <Sublearn color="bg-b" text="Rumah Adat Balla To Kajang" path="/belajar/ballatokajang" />
            </div>

            <div className="flex flex-col w-fit gap-2">
              {/* ===Blok-2=== */}
              <Sublearn color="bg-c" text="Kapurung" path="/belajar/kapurung" />
              <Sublearn color="bg-c" text="Es Pisang Ijo" path="/belajar/espisangijo" />
              <Sublearn color="bg-c" text="Buras" path="/belajar/buras" />
              <Sublearn color="bg-d" text="Pisang Eppe" path="/belajar/pisangeppe" />
              <Sublearn color="bg-d" text="Palekko" path="/belajar/palekko" />
              <Sublearn color="bg-d" text="Mie Titi" path="/belajar/mietiti" />
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex flex-col w-fit gap-2">
              {/* ===Blok-3=== */}
              <Sublearn color="bg-e" text="Soto Konro" path="/belajar/sotokonro" />
              <Sublearn color="bg-e" text="Jeneponto" path="/belajar/jeneponto" />
              <Sublearn color="bg-e" text="Bantaeng" path="/belajar/bantaeng" />
              <Sublearn color="bg-e" text="Luwu" path="/belajar/luwu" />
              <Sublearn color="bg-f" text="Palopo" path="/belajar/palopo" />
              <Sublearn color="bg-f" text="Pinrang" path="/belajar/pinrang" />
              <Sublearn color="bg-f" text="Toraja" path="/belajar/toraja" />
            </div>

            <div className="flex flex-col w-fit gap-2">
              {/* ===Blok-4=== */}
              <Sublearn color="bg-g" text="Wajo" path="/belajar/wajo" />
              <Sublearn color="bg-g" text="Baju Pokko" path="/belajar/pokko" />
              <Sublearn color="bg-g" text="Baju Seppa Tallung" path="/belajar/seppatallung" />
              <Sublearn color="bg-h" text="Baju Bodo" path="/belajar/bodo" />
              <Sublearn color="bg-h" text="Baju Bella Dada" path="/belajar/belladada" />
              <Sublearn color="bg-h" text="Baju Pattuqduq Towaine" path="/belajar/pattuqduqtowaine" />
              <Sublearn color="bg-h" text="Baju Labbu" path="/belajar/labbu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
