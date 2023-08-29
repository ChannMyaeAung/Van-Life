import React, { createContext, useContext, useEffect, useState } from "react";

const vanContext = createContext();

export const VanProvider = ({ children }) => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return <vanContext.Provider value={vans}>{children}</vanContext.Provider>;
};

export const useVanData = () => useContext(vanContext);
