import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const hostVan = useOutletContext();

  console.log(hostVan);

  return (
    <section id="hostvan-photos">
      <figure className="w-[100px] h-[100px] ">
        <img
          src={hostVan.imageUrl}
          alt={hostVan.name}
          className="rounded-[5px]"
        />
      </figure>
    </section>
  );
};

export default HostVanPhotos;
