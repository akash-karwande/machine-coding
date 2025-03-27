import { useEffect, useState } from "react";
import "./bar.css";

const Item = ({ progress }) => {
    const [animated, setAnimated] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setAnimated(progress);
        }, 100)
    }, [progress])
  return (
    <div className="bar-container">
      <div className="bar-inner" style={{transform: `translateX(${animated - 100}%)`}}>{animated} %</div>
    </div>
  );
};

export default Item;
