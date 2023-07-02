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
import PutriTandampalik from "./pages/subLearn/blok-1/Saoraja/Part/Cerita";

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
import ILaurang from "./pages/subLearn/blok-1/Langkanae/Part/Cerita";
// BallaToKajang
import BallaToKajang from "./pages/subLearn/blok-1/BallaToKajang";
import BaLontara from "./pages/subLearn/blok-1/BallaToKajang/Part/Huruf";
import Lima from "./pages/subLearn/blok-1/BallaToKajang/Part/Angka";

import Kapurung from "./pages/subLearn/blok-2/Kapurung";
import EsPisangIjo from "./pages/subLearn/blok-2/EsPisangIjo";
import Buras from "./pages/subLearn/blok-2/Buras";
import PisangEppe from "./pages/subLearn/blok-2/PisangEppe";
import Palekko from "./pages/subLearn/blok-2/Palekko";
import MieTiti from "./pages/subLearn/blok-2/MieTiti";
import SotoKonro from "./pages/subLearn/blok-2/SotoKonro";

import Jeneponto from "./pages/subLearn/blok-3/Jeneponto";
import Bantaeng from "./pages/subLearn/blok-3/Bantaeng";
import Luwu from "./pages/subLearn/blok-3/Luwu";
import Palopo from "./pages/subLearn/blok-3/Palopo";
import Pinrang from "./pages/subLearn/blok-3/Pinrang";
import Toraja from "./pages/subLearn/blok-3/Toraja";
import Wajo from "./pages/subLearn/blok-3/Wajo";

import Pokko from "./pages/subLearn/blok-4/Pokko";
import SeppaTallung from "./pages/subLearn/blok-4/SeppaTallung";
import Bodo from "./pages/subLearn/blok-4/Bodo";
import BellaDada from "./pages/subLearn/blok-4/BellaDada";
import PattuqtuqTowaine from "./pages/subLearn/blok-4/PattuqtuqTowaine";
import Labbu from "./pages/subLearn/blok-4/Labbu";

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
            <Route path="/belajar/saoraja/cerita" Component={PutriTandampalik} />
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
            <Route path="/belajar/langkanae/cerita" Component={ILaurang} />
            {/* BallaToKajang */}
            <Route path="/belajar/ballatokajang" Component={BallaToKajang} />
            <Route path="/belajar/ballatokajang/huruf" Component={BaLontara} />
            <Route path="/belajar/ballatokajang/angka" Component={Lima} />

            {/* ===BLOK-2=== */}
            <Route path="/belajar/kapurung" Component={Kapurung} />
            <Route path="/belajar/espisangijo" Component={EsPisangIjo} />
            <Route path="/belajar/buras" Component={Buras} />
            <Route path="/belajar/pisangeppe" Component={PisangEppe} />
            <Route path="/belajar/palekko" Component={Palekko} />
            <Route path="/belajar/mietiti" Component={MieTiti} />
            <Route path="/belajar/sotokonro" Component={SotoKonro} />

            {/* ===BLOK-3=== */}
            <Route path="/belajar/jeneponto" Component={Jeneponto} />
            <Route path="/belajar/bantaeng" Component={Bantaeng} />
            <Route path="/belajar/luwu" Component={Luwu} />
            <Route path="/belajar/palopo" Component={Palopo} />
            <Route path="/belajar/pinrang" Component={Pinrang} />
            <Route path="/belajar/toraja" Component={Toraja} />
            <Route path="/belajar/wajo" Component={Wajo} />

            {/* ===BLOK-4=== */}
            <Route path="/belajar/pokko" Component={Pokko} />
            <Route path="/belajar/seppatallung" Component={SeppaTallung} />
            <Route path="/belajar/bodo" Component={Bodo} />
            <Route path="/belajar/belladada" Component={BellaDada} />
            <Route path="/belajar/pattuqduqtowaine" Component={PattuqtuqTowaine} />
            <Route path="/belajar/Labbu" Component={Labbu} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
