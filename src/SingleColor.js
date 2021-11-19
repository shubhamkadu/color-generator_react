import React, { useState, useEffect } from "react";

function SingleColor({ rgb, weight, index, hexColor }) {
  
  const [alert, setAlert] = useState(false);

  const bcg = rgb.join(",");

  const hexValue = `#${hexColor}`;

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  
  return (
    <button
      className={`color ${index > 9 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})`}}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </button>
  );
}

export default SingleColor;
