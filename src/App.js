import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Learn from "./pages/Learn";
// BALLA LOMPOA
import BallaLompoa from "./pages/subLearn/blok-1/BallaLompoa";
import KaLontara from "./pages/subLearn/blok-1/BallaLompoa/Part/Huruf";
import Nol from "./pages/subLearn/blok-1/BallaLompoa/Part/Angka";

// SAORAJA
import Saoraja from "./pages/subLearn/blok-1/Saoraja";
import GaLontara from "./pages/subLearn/blok-1/Saoraja/Part/Huruf";
import Satu from "./pages/subLearn/blok-1/Saoraja/Part/Angka";

// BOYANG
import Boyang from "./pages/subLearn/blok-1/Boyang";
import NgaLontara from "./pages/subLearn/blok-1/Boyang/Part/Huruf";
import Dua from "./pages/subLearn/blok-1/Boyang/Part/Angka";

// Tongkonan
import Tongkonan from "./pages/subLearn/blok-1/Tongkonan";
import NkaLontara from "./pages/subLearn/blok-1/Tongkonan/Part/Huruf";
import Tiga from "./pages/subLearn/blok-1/Tongkonan/Part/Angka";
// Langkanae
import Langkanae from "./pages/subLearn/blok-1/Langkanae";
import PaLontara from "./pages/subLearn/blok-1/Langkanae/Part/Huruf";
import Empat from "./pages/subLearn/blok-1/Langkanae/Part/Angka";
// BallaToKajang
import BallaToKajang from "./pages/subLearn/blok-1/BallaToKajang";
import BaLontara from "./pages/subLearn/blok-1/BallaToKajang/Part/Huruf";
import Lima from "./pages/subLearn/blok-1/BallaToKajang/Part/Angka";
// Kapurung
import Kapurung from "./pages/subLearn/blok-2/Kapurung";
import MaLontara from "./pages/subLearn/blok-2/Kapurung/Part/Huruf";
import Enam from "./pages/subLearn/blok-2/Kapurung/Part/Angka";
// Es Pisang Ijo
import EsPisangIjo from "./pages/subLearn/blok-2/EsPisangIjo";
import MpaLontara from "./pages/subLearn/blok-2/EsPisangIjo/Part/Huruf";
import Tujuh from "./pages/subLearn/blok-2/EsPisangIjo/Part/Angka";
// Buras
import Buras from "./pages/subLearn/blok-2/Buras";
import TaLontara from "./pages/subLearn/blok-2/Buras/Part/Huruf";
import Delapan from "./pages/subLearn/blok-2/Buras/Part/Angka";
// Pisang Eppe
import PisangEppe from "./pages/subLearn/blok-2/PisangEppe";
import DaLontara from "./pages/subLearn/blok-2/PisangEppe/Part/Huruf";
import Sembilan from "./pages/subLearn/blok-2/PisangEppe/Part/Angka";
// Palekko
import Palekko from "./pages/subLearn/blok-2/Palekko";
import NaLontara from "./pages/subLearn/blok-2/Palekko/Part/Huruf";
import Sepuluh from "./pages/subLearn/blok-2/Palekko/Part/Angka";
// Mie Titi
import MieTiti from "./pages/subLearn/blok-2/MieTiti";
import NraLontara from "./pages/subLearn/blok-2/MieTiti/Part/Huruf";
import Sebelas from "./pages/subLearn/blok-2/MieTiti/Part/Angka";
// SotoKonro
import SotoKonro from "./pages/subLearn/blok-2/SotoKonro";
import CaLontara from "./pages/subLearn/blok-2/SotoKonro/Part/Huruf";
import Duabelas from "./pages/subLearn/blok-2/SotoKonro/Part/Angka";

// Jeneponto
import Jeneponto from "./pages/subLearn/blok-3/Jeneponto";
import JaLontara from "./pages/subLearn/blok-3/Jeneponto/Part/Huruf";
import Tigabelas from "./pages/subLearn/blok-3/Jeneponto/Part/Angka";

// Bantaeng
import Bantaeng from "./pages/subLearn/blok-3/Bantaeng";
import NyaLontara from "./pages/subLearn/blok-3/Bantaeng/Part/Huruf";
import Empatbelas from "./pages/subLearn/blok-3/Bantaeng/Part/Angka";

// Luwu
import Luwu from "./pages/subLearn/blok-3/Luwu";
import NcaLontara from "./pages/subLearn/blok-3/Luwu/Part/Huruf";
import Limabelas from "./pages/subLearn/blok-3/Luwu/Part/Angka";

// Palopo
import Palopo from "./pages/subLearn/blok-3/Palopo";
import YaLontara from "./pages/subLearn/blok-3/Palopo/Part/Huruf";
import Enambelas from "./pages/subLearn/blok-3/Palopo/Part/Angka";

// Pinrang
import Pinrang from "./pages/subLearn/blok-3/Pinrang";
import RaLontara from "./pages/subLearn/blok-3/Pinrang/Part/Huruf";
import Tujuhbelas from "./pages/subLearn/blok-3/Pinrang/Part/Angka";

// Toraja
import Toraja from "./pages/subLearn/blok-3/Toraja";
import LaLontara from "./pages/subLearn/blok-3/Toraja/Part/Huruf";
import Delapanbelas from "./pages/subLearn/blok-3/Toraja/Part/Angka";

// Wajo
import Wajo from "./pages/subLearn/blok-3/Wajo";
import WaLontara from "./pages/subLearn/blok-3/Wajo/Part/Huruf";
import Sembilanbelas from "./pages/subLearn/blok-3/Wajo/Part/Angka";

// Pokko
import Pokko from "./pages/subLearn/blok-4/Pokko";
import SaLontara from "./pages/subLearn/blok-4/Pokko/Part/Huruf";
import Duapuluh from "./pages/subLearn/blok-4/Pokko/Part/Angka";

// SeppaTallung
import SeppaTallung from "./pages/subLearn/blok-4/SeppaTallung";
import ALontara from "./pages/subLearn/blok-4/SeppaTallung/Part/Huruf";
import Duapuluhsatu from "./pages/subLearn/blok-4/SeppaTallung/Part/Angka";

// Bodo
import Bodo from "./pages/subLearn/blok-4/Bodo";
import HaLontara from "./pages/subLearn/blok-4/Bodo/Part/Huruf";
import Duapuluhdua from "./pages/subLearn/blok-4/Bodo/Part/Angka";

// BellaDada
import BellaDada from "./pages/subLearn/blok-4/BellaDada";
import ELontara from "./pages/subLearn/blok-4/BellaDada/Part/Huruf";
import Duapuluhtiga from "./pages/subLearn/blok-4/BellaDada/Part/Angka";

// PattuqtuqTowaine
import PattuqduqTowaine from "./pages/subLearn/blok-4/PattuqduqTowaine";
import OLontara from "./pages/subLearn/blok-4/PattuqduqTowaine/Part/Huruf";
import Duapuluhempat from "./pages/subLearn/blok-4/PattuqduqTowaine/Part/Angka";

// Labbu
import Labbu from "./pages/subLearn/blok-4/Labbu";
import EeLontara from "./pages/subLearn/blok-4/Labbu/Part/Huruf";
import Duapuluhlima from "./pages/subLearn/blok-4/Labbu/Part/Angka";

// Cerita
import Cerita from "./pages/subLearn/menu/Cerita";
import Video from "./pages/subLearn/menu/Video";

// lIST CERITA
import PutriTandampalik from "./pages/subLearn/menu/ListCerita/PutriTandampalik";
import ILaurang from "./pages/subLearn/menu/ListCerita/ILaurang";
import LegendaSiPenaklukRajawali from "./pages/subLearn/menu/ListCerita/Rajawali";
import LaSallomo from "./pages/subLearn/menu/ListCerita/LaSallomo";
import AsalUsulOrangBajo from "./pages/subLearn/menu/ListCerita/Bajo";
import LimaSungai from "./pages/subLearn/menu/ListCerita/LimaSungai";
import NenekPakande from "./pages/subLearn/menu/ListCerita/NenekPakande";
import Sawerigading from "./pages/subLearn/menu/ListCerita/Sawerigading";
import LaUpe from "./pages/subLearn/menu/ListCerita/LaUpe";
import AmboUpe from "./pages/subLearn/menu/ListCerita/AmboUpe";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact Component={Layout}>
            <Route index exact Component={Home} />
            <Route path="/about" index exact Component={About} />
            <Route path="/belajar" Component={Learn} />

            {/* ===BLOK-1=== */}
            {/* BALLALOMPOA */}
            <Route path="/belajar/ballalompoa" Component={BallaLompoa} />
            <Route path="/belajar/ballalompoa/huruf" Component={KaLontara} />
            <Route path="/belajar/ballalompoa/angka" Component={Nol} />
            {/* SAORAJA */}
            <Route path="/belajar/saoraja" Component={Saoraja} />
            <Route path="/belajar/saoraja/huruf" Component={GaLontara} />
            <Route path="/belajar/saoraja/angka" Component={Satu} />
            {/* BOYANG */}
            <Route path="/belajar/boyang" Component={Boyang} />
            <Route path="/belajar/boyang/huruf" Component={NgaLontara} />
            <Route path="/belajar/boyang/angka" Component={Dua} />
            {/* Tongkonan */}
            <Route path="/belajar/tongkonan" Component={Tongkonan} />
            <Route path="/belajar/tongkonan/huruf" Component={NkaLontara} />
            <Route path="/belajar/tongkonan/angka" Component={Tiga} />
            {/* Langkanae */}
            <Route path="/belajar/langkanae" Component={Langkanae} />
            <Route path="/belajar/langkanae/huruf" Component={PaLontara} />
            <Route path="/belajar/langkanae/angka" Component={Empat} />
            {/* BallaToKajang */}
            <Route path="/belajar/ballatokajang" Component={BallaToKajang} />
            <Route path="/belajar/ballatokajang/huruf" Component={BaLontara} />
            <Route path="/belajar/ballatokajang/angka" Component={Lima} />

            {/* ===BLOK-2=== */}
            {/* KAPURUNG */}
            <Route path="/belajar/kapurung" Component={Kapurung} />
            <Route path="/belajar/kapurung/huruf" Component={MaLontara} />
            <Route path="/belajar/kapurung/angka" Component={Enam} />
            {/* ES PISANG IJO */}
            <Route path="/belajar/espisangijo" Component={EsPisangIjo} />
            <Route path="/belajar/espisangijo/huruf" Component={MpaLontara} />
            <Route path="/belajar/espisangijo/angka" Component={Tujuh} />
            {/* BURAS */}
            <Route path="/belajar/buras" Component={Buras} />
            <Route path="/belajar/buras/huruf" Component={TaLontara} />
            <Route path="/belajar/buras/angka" Component={Delapan} />
            {/* PISANG EPPE */}
            <Route path="/belajar/pisangeppe" Component={PisangEppe} />
            <Route path="/belajar/pisangeppe/huruf" Component={DaLontara} />
            <Route path="/belajar/pisangeppe/angka" Component={Sembilan} />
            {/* PALEKKO */}
            <Route path="/belajar/palekko" Component={Palekko} />
            <Route path="/belajar/palekko/huruf" Component={NaLontara} />
            <Route path="/belajar/palekko/angka" Component={Sepuluh} />
            {/* MIE TITI */}
            <Route path="/belajar/mietiti" Component={MieTiti} />
            <Route path="/belajar/mietiti/huruf" Component={NraLontara} />
            <Route path="/belajar/mietiti/angka" Component={Sebelas} />
            {/* SOTO KONRO */}
            <Route path="/belajar/sotokonro" Component={SotoKonro} />
            <Route path="/belajar/sotokonro/huruf" Component={CaLontara} />
            <Route path="/belajar/sotokonro/angka" Component={Duabelas} />

            {/* ===BLOK-3=== */}
            {/* JENEPONTO */}
            <Route path="/belajar/jeneponto" Component={Jeneponto} />
            <Route path="/belajar/jeneponto/huruf" Component={JaLontara} />
            <Route path="/belajar/jeneponto/angka" Component={Tigabelas} />

            {/* BANTAENG */}
            <Route path="/belajar/bantaeng" Component={Bantaeng} />
            <Route path="/belajar/bantaeng/huruf" Component={NyaLontara} />
            <Route path="/belajar/bantaeng/angka" Component={Empatbelas} />

            {/* LUWU */}
            <Route path="/belajar/luwu" Component={Luwu} />
            <Route path="/belajar/luwu/huruf" Component={NcaLontara} />
            <Route path="/belajar/luwu/angka" Component={Limabelas} />

            {/* PALOPO */}
            <Route path="/belajar/palopo" Component={Palopo} />
            <Route path="/belajar/palopo/huruf" Component={YaLontara} />
            <Route path="/belajar/palopo/angka" Component={Enambelas} />

            {/* PINRANG */}
            <Route path="/belajar/pinrang" Component={Pinrang} />
            <Route path="/belajar/pinrang/huruf" Component={RaLontara} />
            <Route path="/belajar/pinrang/angka" Component={Tujuhbelas} />

            {/* TORAJA */}
            <Route path="/belajar/toraja" Component={Toraja} />
            <Route path="/belajar/toraja/huruf" Component={LaLontara} />
            <Route path="/belajar/toraja/angka" Component={Delapanbelas} />

            {/* WAJO */}
            <Route path="/belajar/wajo" Component={Wajo} />
            <Route path="/belajar/wajo/huruf" Component={WaLontara} />
            <Route path="/belajar/wajo/angka" Component={Sembilanbelas} />

            {/* ===BLOK-4=== */}
            {/* POKKO */}
            <Route path="/belajar/pokko" Component={Pokko} />
            <Route path="/belajar/pokko/huruf" Component={SaLontara} />
            <Route path="/belajar/pokko/angka" Component={Duapuluh} />

            {/* SEPPA TALLUNG */}
            <Route path="/belajar/seppatallung" Component={SeppaTallung} />
            <Route path="/belajar/seppatallung/huruf" Component={ALontara} />
            <Route path="/belajar/seppatallung/angka" Component={Duapuluhsatu} />

            {/* BODO */}
            <Route path="/belajar/bodo" Component={Bodo} />
            <Route path="/belajar/bodo/huruf" Component={HaLontara} />
            <Route path="/belajar/bodo/angka" Component={Duapuluhdua} />

            {/* BELLA DADA */}
            <Route path="/belajar/belladada" Component={BellaDada} />
            <Route path="/belajar/belladada/huruf" Component={ELontara} />
            <Route path="/belajar/belladada/angka" Component={Duapuluhtiga} />

            {/* PATTUQDUQTOWAINE */}
            <Route path="/belajar/pattuqduqtowaine" Component={PattuqduqTowaine} />
            <Route path="/belajar/pattuqduqtowaine/huruf" Component={OLontara} />
            <Route path="/belajar/pattuqduqtowaine/angka" Component={Duapuluhempat} />

            {/* LABBU */}
            <Route path="/belajar/labbu" Component={Labbu} />
            <Route path="/belajar/labbu/huruf" Component={EeLontara} />
            <Route path="/belajar/labbu/angka" Component={Duapuluhlima} />

            {/* Menu */}
            <Route path="/belajar/cerita" Component={Cerita} />
            <Route path="/belajar/video" Component={Video} />

            {/* List Cerita */}
            <Route path="/belajar/cerita/putritandampalik" Component={PutriTandampalik} />
            <Route path="/belajar/cerita/ilaurang" Component={ILaurang} />
            <Route path="/belajar/cerita/legendasipenaklukrajawali" Component={LegendaSiPenaklukRajawali} />
            <Route path="/belajar/cerita/lasallomo" Component={LaSallomo} />
            <Route path="/belajar/cerita/asalusulorangbajo" Component={AsalUsulOrangBajo} />
            <Route path="/belajar/cerita/limasungai" Component={LimaSungai} />
            <Route path="/belajar/cerita/nenekpakande" Component={NenekPakande} />
            <Route path="/belajar/cerita/sawerigading" Component={Sawerigading} />
            <Route path="/belajar/cerita/laupe" Component={LaUpe} />
            <Route path="/belajar/cerita/amboupe" Component={AmboUpe} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
