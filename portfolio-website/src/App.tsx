import { Route, Routes, useLocation } from "react-router-dom";

// components

import NotFound from "./pages/NotFound/NotFound";
import Home2 from "./pages/Home2/Home2";
import Garnish3D from "./components/Garnish3D/3DGarnish";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="garnishContainer">
        <Garnish3D />
      </div>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
