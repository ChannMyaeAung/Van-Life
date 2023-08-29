import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const hostVan = useOutletContext();

  return (
    <section id="hostvan-pricing">
      <p className="md:text-[24px] font-medium">
        ${hostVan.price.toFixed(2)}
        <span className="font-medium text-[16px] md:text-[20px]">/day</span>
      </p>
    </section>
  );
};

export default HostVanPricing;
