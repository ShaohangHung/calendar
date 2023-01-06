import React, { useState } from "react";
import "./index.css";

export default function MonthCell(props) {
  const { year, monthObj, changeView } = props;
  const [bgColor, setBgColor] = useState("white");
  const [color, setColor] = useState(props.color);

  const markRedCircle = () => {
    setColor("white");
    setBgColor("red");
  };

  const cancelRedCircle = () => {
    setColor("black");
    setBgColor("white");
  };

  const enterView = () => {
    changeView(`DateView`, `${year}${monthObj.month}`);
  };

  return (
    <td
      style={{
        padding: "0px",
        height: "50px",
        width: "25%",
        textAlign: "center",
        verticalAlign: "inherit",
      }}
      key={`${year}${monthObj.month}`}
    >
      <button
        className="monthCell"
        style={{ color, backgroundColor: bgColor }}
        onFocus={markRedCircle}
        onBlur={cancelRedCircle}
        onDoubleClick={enterView}
      >
        {monthObj.name}
      </button>
    </td>
  );
}
