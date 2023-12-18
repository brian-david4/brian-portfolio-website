import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
