import { Route, Routes, useLocation } from "react-router-dom";

// components

// pages
// import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Home2 from "./pages/Home2/Home2";

function App() {
  const location = useLocation();

  // const { pathname } = location;

  // const paths = ["/", "/contact", "/about", "/projects"];

  // checking for 404page
  // useEffect(() => {
  //   if (!paths.includes(pathname)) {
  //     setOn404Page(true);
  //   } else {
  //     setOn404Page(false);
  //   }
  // }, [pathname]);

  // check footer hover on homepage

  return (
    <>
      {/* <MouseTrail footerHovered={footerHovered} on404Page={on404Page} /> */}
      {/* <Header on404Page={on404Page} /> */}
      <Routes location={location} key={location.pathname}>
        <Route
          index
          element={
            // <Home
            //   footerHovered={footerHovered}
            //   handleMouseEnter={() => setFooterHovered(true)}
            //   handleMouseLeave={() => setFooterHovered(false)}
            // />
            <Home2 />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
