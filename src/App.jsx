import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import "./server";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import DashBoard from "./pages/Host/DashBoard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as hostVanLoader } from "./pages/Host/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";
import SignUp from "./pages/SignUp";
import { requireAuth } from "./utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route path="signup" element={<SignUp />} />

      <Route path="/vans">
        <Route
          index
          element={<Vans />}
          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route
          path=":id"
          element={<VanDetail />}
          loader={vanDetailLoader}
          errorElement={<Error />}
        />
      </Route>

      <Route
        path="host"
        element={<HostLayout />}
        errorElement={<Error />}
        loader={async ({ request }) => await requireAuth(request)}
      >
        <Route
          index
          element={<DashBoard />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="vans"
          element={<HostVans />}
          errorElement={<Error />}
          loader={hostVanLoader}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          errorElement={<Error />}
          loader={hostVanDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={
              <HostVanPricing
                loader={async ({ request }) => await requireAuth(request)}
              />
            }
          />
          <Route
            path="photos"
            element={
              <HostVanPhotos
                loader={async ({ request }) => await requireAuth(request)}
              />
            }
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
