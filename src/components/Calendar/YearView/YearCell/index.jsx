import React, { useState } from "react";
import "./index.css";

export default function YearCell(props) {
  const { yearObj, changeView } = props;
  const { year, startDecades } = yearObj;
  const [bgColor, setBgColor] = useState("white");
  const [color, setColor] = useState(yearObj.color);

  const markRedCircle = () => {
    setColor("white");
    setBgColor("red");
  };

  const cancelRedCircle = () => {
    const curYear = year.toString().slice(0, 3);
    const startDecadesYear = startDecades.toString().slice(0, 3);
    if (curYear === startDecadesYear) {
      setColor("black");
    } else {
      setColor("#eeeeee");
    }
    setBgColor("white");
  };

  const enterView = () => {
    changeView(`MonthView`, `${year}01`);
  };

  return (
    <td
      style={{
        padding: "0px",
        height: "50px",
        textAlign: "center",
        verticalAlign: "inherit",
      }}
      key={year}
    >
      <button
        className="yearCell"
        style={{ color, backgroundColor: bgColor }}
        onFocus={markRedCircle}
        onBlur={cancelRedCircle}
        onDoubleClick={enterView}
      >
        {year}
      </button>
    </td>
  );
}
