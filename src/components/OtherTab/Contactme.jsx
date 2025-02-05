import React from "react";
import { useState } from "react";

const Contactme = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <span className="CM-title">Contact Me</span>
      <span className="flex flex-row gap-3">
        <span className="email">Nikhilsaimanam5@gmail.com</span>
      </span>
      <br />
      <span>
        Inspired by -{" "}
        <a
          href="https://henryheffernan.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          henry heffernan portfolio
        </a>
      </span>
    </div>
  );
};

export default Contactme;
