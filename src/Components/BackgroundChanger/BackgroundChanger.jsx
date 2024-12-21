import { useEffect } from "react";
import "./bg.css";
const BackgroundChanger = ({ condition }) => {
  useEffect(() => {
    const body = document.body;
    body.className = "";

    if (condition.includes("rain")) body.classList.add("rainy");
    else if (condition.includes("overcast")) body.classList.add("cloudy");
    else if (condition.includes("sunny")) body.classList.add("sunny");
    else if (condition.includes("clear")) body.classList.add("night");

    else body.classList.add("default");
  }, [condition]);

  return null;
};

export default BackgroundChanger;