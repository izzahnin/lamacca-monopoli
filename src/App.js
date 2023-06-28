import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Learn from "./pages/Learn";
import BallaLompoa from "./pages/subLearn/blok-1/BallaLompoa";
import Saoraja from "./pages/subLearn/blok-1/Saoraja";
import Boyang from "./pages/subLearn/blok-1/Boyang";
import Tongkonan from "./pages/subLearn/blok-1/Tongkonan";
import Langkanae from "./pages/subLearn/blok-1/Langkanae";
import BallaToKajang from "./pages/subLearn/blok-1/BallaToKajang";

import Kapurung from "./pages/subLearn/blok-2/Kapurung";
import EsPisangIjo from "./pages/subLearn/blok-2/EsPisangIjo";
import Buras from "./pages/subLearn/blok-2/Buras";
import PisangEppe from "./pages/subLearn/blok-2/PisangEppe";
import Palekko from "./pages/subLearn/blok-2/Palekko";
import MieTiti from "./pages/subLearn/blok-2/MieTiti";
import SotoKonro from "./pages/subLearn/blok-2/SotoKonro";

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
            <Route path="/belajar/ballalompoa" Component={BallaLompoa} />
            <Route path="/belajar/saoraja" Component={Saoraja} />
            <Route path="/belajar/boyang" Component={Boyang} />
            <Route path="/belajar/tongkonan" Component={Tongkonan} />
            <Route path="/belajar/langkanae" Component={Langkanae} />
            <Route path="/belajar/ballatokajang" Component={BallaToKajang} />

            {/* ===BLOK-2=== */}
            <Route path="/belajar/kapurung" Component={Kapurung} />
            <Route path="/belajar/espisangijo" Component={EsPisangIjo} />
            <Route path="/belajar/buras" Component={Buras} />
            <Route path="/belajar/pisangeppe" Component={PisangEppe} />
            <Route path="/belajar/palekko" Component={Palekko} />
            <Route path="/belajar/mietiti" Component={MieTiti} />
            <Route path="/belajar/sotokonro" Component={SotoKonro} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
