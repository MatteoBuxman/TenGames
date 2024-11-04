import React, { useState } from "react";

export default function useScreen() {
  const [ width, setWidth ] = useState(window.innerWidth);
  const [ height, setHeight ] = useState(window.innerHeight);

  const handler = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  window.addEventListener("resize", handler);

  const cleanup = () => {
    window.removeEventListener("resize", handler);
  };

  return { width, height, cleanup };
}
