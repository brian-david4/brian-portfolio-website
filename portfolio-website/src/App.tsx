import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import MouseTrail from "./components/MouseTrail/MouseTrail";

function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <MouseTrail />
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
