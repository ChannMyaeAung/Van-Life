import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const hostVan = useOutletContext();

  return (
    <section className="text-[14px] flex flex-col gap-5 font-medium leading-[21px] md:text-[20px] md:leading-[30px]">
      <p id="hostvan-name">
        <span className="font-bold">Name:</span> {hostVan.name}
      </p>

      <p id="hostvan-category">
        <span className="font-bold">Category:</span> {hostVan.type}
      </p>

      <p id="hostvan-description">
        <span className="font-bold">Description:</span> {hostVan.description}
      </p>

      <p id="hostvan-visibility">
        <span className="font-bold">Name:</span> Public
      </p>
    </section>
  );
};

export default HostVanInfo;
