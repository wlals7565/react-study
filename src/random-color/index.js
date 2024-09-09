import { useEffect, useState } from "react";
import "./styles.scss";
const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  const setHexColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 15)];
    }
    setColor(color);
  };

  const setRgbColor = () => {
    let color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
    setColor(color);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") setRgbColor();
    else setHexColor();
  }, [typeOfColor]);

  const generateRandomColor = () => {
    typeOfColor === "hex" ? setHexColor() : setRgbColor();
  };
  return (
    <div style={{ backgroundColor: color }} className="container">
      <button
        onClick={() => {
          setTypeOfColor("hex");
        }}
      >
        create HEX Color
      </button>
      <button
        onClick={() => {
          setTypeOfColor("rgb");
        }}
      >
        create RGB Color
      </button>
      <button
        onClick={() => {
          generateRandomColor();
        }}
      >
        Generate Random Color
      </button>
      <div className="color-indicator">
        <div>{typeOfColor}</div>
        <div>{color}</div>
      </div>
    </div>
  );
};

export default RandomColor;
