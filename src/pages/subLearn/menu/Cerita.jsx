import React from "react";
import ButtonMenu from "../../../components/Button/ButtonMenu";

function Cerita() {
  return (
    <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bglontara.svg"})` }} className="bg-cyan-50 min-h-[100vh]">
      <div className="flex flex-col max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 gap-4">
        <div className="flex flex-col text-center gap-2">
          <h1 className="text-4xl font-extrabold text-navy sm:text-5xl md:text-6xl underline ">Cerita Rakyat</h1>
          <p className="text-xl text-navy font-medium">Kumpulan Cerita Rakyat Sulawesi Selatan</p>
        </div>
        <div className="flex justify-center gap-2">
          <div className="flex flex-col w-fit gap-2">
            <ButtonMenu path="/belajar/cerita/PutriTandampalik" text="Putri Tandampali" color="bg-red-500" />
            <ButtonMenu path="/belajar/cerita/ILaurang" text="I Laurang" color="bg-orange-500" />
            <ButtonMenu path="/belajar/cerita/LegendaSiPenaklukRajawali" text="Legenda Si Penakluk Rajawali" color="bg-amber-500" />
            <ButtonMenu path="/belajar/cerita/LaSallomo" text="La Sallomo" color="bg-yellow-500" />
            <ButtonMenu path="/belajar/cerita/AsalUsulOrangBajo" text="Asal Usul Orang Bajo" color="bg-lime-500" />
          </div>
          <div className="flex flex-col w-fit gap-2">
            <ButtonMenu path="/belajar/cerita/LimaSungai" text="Terjadinya Lima Sungai Besar di Sul-Sel" color="bg-green-500" />
            <ButtonMenu path="/belajar/cerita/NenekPakande" text="Siluman Nenek Pakande" color="bg-emerald-500" />
            <ButtonMenu path="/belajar/cerita/Sawerigading" text="Sawerigading" color="bg-teal-500" />
            <ButtonMenu path="/belajar/cerita/LaUpe" text="La Upe Si Anak Yatim" color="bg-sky-500" />
            <ButtonMenu path="/belajar/cerita/AmboUpe" text="Ambo Upe & Burung Beo" color="bg-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cerita;
