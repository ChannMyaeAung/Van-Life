import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { styles } from "./style";
import Vans from "./pages/Vans/Vans";
import "./server";
import VanDetail from "./pages/Vans/VanDetail";
import { VanProvider } from "./pages/Vans/VanContext";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <VanProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
          </Route>
        </Routes>
        <footer
          className={` text-white w-full h-[75px] bg-[#252525] z-10 text-center ${styles.flexCenter}`}
        >
          <p className={`z-50 opacity-80`}>@2022 #VANLIFE</p>
        </footer>
      </VanProvider>
    </BrowserRouter>
  );
}

export default App;
