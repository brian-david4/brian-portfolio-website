import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import MouseTrail from "./components/MouseTrail/MouseTrail";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

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

  const paths = ["/", "/contact"];

  return (
    <>
      <MouseTrail paths={paths} />
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
