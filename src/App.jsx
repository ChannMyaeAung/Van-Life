import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import "./server";
import VanDetail from "./pages/Vans/VanDetail";
import { VanProvider } from "./pages/Vans/VanContext";
import Layout from "./components/Layout";
import DashBoard from "./pages/Host/DashBoard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";

function App() {
  return (
    <BrowserRouter>
      <VanProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/vans">
              <Route index element={<Vans />} />
              <Route path=":id" element={<VanDetail />} />
            </Route>

            <Route path="host" element={<HostLayout />}>
              <Route index element={<DashBoard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </VanProvider>
    </BrowserRouter>
  );
}

export default App;
