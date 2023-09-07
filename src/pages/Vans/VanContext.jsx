import React, { createContext, useContext, useEffect, useState } from "react";

const vanContext = createContext();

export const VanProvider = ({ children }) => {
  const [vans, setVans] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`/api/vans`);
    const data = await res.json();
    setVans(data.vans);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <vanContext.Provider value={vans}>{children}</vanContext.Provider>;
};

export const useVanData = () => useContext(vanContext);
