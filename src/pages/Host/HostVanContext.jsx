import React, { createContext, useContext, useEffect, useState } from "react";

const hostVanContext = createContext();

const HostVanContext = ({ children }) => {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    fetch(`/api/host/vans`)
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);

  return (
    <hostVanContext.Provider value={hostVans}>
      {children}
    </hostVanContext.Provider>
  );
};

export default HostVanContext;

export const useHostVanData = () => useContext(hostVanContext);
