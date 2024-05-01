import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

// components
import Header from "./components/Header/Header";
import MouseTrail from "./components/MouseTrail/MouseTrail";
// pages
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Projects from "./pages/Projects/Projects";

function App() {
  const location = useLocation();

  const { pathname } = location;
  const [on404Page, setOn404Page] = useState(false);

  // smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.035, wheelMultiplier: 0.65 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const paths = ["/", "/contact", "/about", "/projects"];

  // checking for 404page
  useEffect(() => {
    if (!paths.includes(pathname)) {
      setOn404Page(true);
    } else {
      setOn404Page(false);
    }
  }, [pathname]);

  return (
    <>
      <MouseTrail on404Page={on404Page} />
      <Header on404Page={on404Page} />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
