import React, { useEffect, useState } from "react";

import LoadingGif from "../assets/Loading.gif";

export default function Loader({ size }) {
  const [introAnimation, setIntroAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIntroAnimation(false);
    }, 3000);
  }, []);
  if (introAnimation === true) {
    return (
      <div
        className={`flex flex-col ${size ? "h-10" : "h-screen"}  bg-gray-100`}
      >
        <img className="  m-auto " src={LoadingGif} alt="Welcome" />
      </div>
    );
  }
}
