import React from "react";
import Sublearn from "../components/Sublearn";

function Learn() {
  return (
    <div className="bg-cyan-50 min-h-fit">
      <div className="flex flex-col max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 gap-4">
        <div className="flex flex-col text-center gap-2">
          <h1 className="text-4xl font-extrabold text-navy sm:text-5xl md:text-6xl underline ">Belajar</h1>
          <p className="text-xl text-navy font-medium">Membaca dan Mengenal Angka & Huruf</p>
        </div>
        <div className="flex justify-center gap-2">
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex flex-col w-fit gap-2">
              {/* ===Blok-1=== */}
              <Sublearn color="bg-red-500" text="Rumah Adat Balla Lompoa" path="/belajar/ballalompoa" />
              <Sublearn color="bg-red-500" text="Rumah Adat Saoraja" path="/belajar/saoraja" />
              <Sublearn color="bg-red-500" text="Rumah Adat Boyang" path="/belajar/boyang" />
              <Sublearn color="bg-emerald-500" text="Rumah Adat Tongkonan" path="/belajar/tongkonan" />
              <Sublearn color="bg-emerald-500" text="Rumah Adat Jangkanae" path="/belajar/jangkanae" />
              <Sublearn color="bg-emerald-500" text="Rumah Adat Balla To Kajang" path="/belajar/ballatokajang" />
            </div>

            <div className="flex flex-col w-fit gap-2">
              {/* ===Blok-2=== */}
              <Sublearn color="bg-yellow-500" text="Kapurung" path="/belajar/kapurung" />
              <Sublearn color="bg-yellow-500" text="Es Pisang Ijo" path="/belajar/espisangijo" />
              <Sublearn color="bg-yellow-500" text="Buras" path="/belajar/buras" />
              <Sublearn color="bg-sky-500" text="Pisang Eppe" path="/belajar/pisangeppe" />
              <Sublearn color="bg-sky-500" text="Palekko" path="/belajar/palekko" />
              <Sublearn color="bg-sky-500" text="Mie Titi" path="/belajar/mietiti" />
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex flex-col w-fit gap-2">
              {/* ===Blok-3=== */}
              <Sublearn color="bg-amber-500" text="Soto Konro" path="/belajar/sotokonro" />
              <Sublearn color="bg-amber-500" text="Jeneponto" path="/belajar/jeneponto" />
              <Sublearn color="bg-amber-500" text="Bantaeng" path="/belajar/bantaeng" />
              <Sublearn color="bg-amber-500" text="Luwu" path="/belajar/luwu" />
              <Sublearn color="bg-slate-500" text="Palopo" path="/belajar/palopo" />
              <Sublearn color="bg-slate-500" text="Pinrang" path="/belajar/pinrang" />
              <Sublearn color="bg-slate-500" text="Toraja" path="/belajar/toraja" />
            </div>

            <div className="flex flex-col w-fit gap-2">
              {/* ===Blok-4=== */}
              <Sublearn color="bg-orange-500" text="Wajo" path="/belajar/wajo" />
              <Sublearn color="bg-orange-500" text="Baju Pokko" path="/belajar/pokko" />
              <Sublearn color="bg-orange-500" text="Baju Seppa Tallung" path="/belajar/seppatallung" />
              <Sublearn color="bg-red-800" text="Baju Bodo" path="/belajar/bodo" />
              <Sublearn color="bg-red-800" text="Baju Bella Dada" path="/belajar/belladada" />
              <Sublearn color="bg-red-800" text="Baju Pattuqduq Towaine" path="/belajar/pattuqduqtowaine" />
              <Sublearn color="bg-red-800" text="Baju Labbu" path="/belajar/labbu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
