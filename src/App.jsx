import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { styles } from "./style";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <div className="logo-container">
          <NavLink to="/">
            <img src="logo.png" alt="" className="logo" />
          </NavLink>
        </div>
        <ul className="nav-links">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active-link" : "")
            }
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active-link" : "")
            }
          >
            Vans
          </NavLink>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer
        className={` text-white w-full h-[75px] bg-[#252525] z-10 text-center ${styles.flexCenter}`}
      >
        <p className={`z-50 opacity-80`}>@2022 #VANLIFE</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
