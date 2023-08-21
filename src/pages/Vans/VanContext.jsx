import React, { createContext, useContext, useEffect, useState } from "react";

const VanContext = createContext();

export const VanProvider = ({ children }) => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return <VanContext.Provider value={vans}>{children}</VanContext.Provider>;
};

export const useVanData = () => useContext(VanContext);
