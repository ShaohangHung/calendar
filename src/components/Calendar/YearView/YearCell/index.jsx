import React, { useState, useCallback } from "react";
import Cell from "../../Cell";

export default function YearCell(props) {
  const { yearObj, changeView } = props;
  const { year, startDecades } = yearObj;
  const [bgColor, setBgColor] = useState("white");
  const [color, setColor] = useState(yearObj.color);

  const markRedCircle = useCallback((btnRef) => {
    setColor("white");
    setBgColor("red");
  }, []);

  const cancelRedCircle = useCallback(
    (btnRef) => {
      const curYear = year.toString().slice(0, 3);
      const startDecadesYear = startDecades.toString().slice(0, 3);
      if (curYear === startDecadesYear) {
        setColor("black");
      } else {
        setColor("#eeeeee");
      }
      setBgColor("white");
    },
    [startDecades, year]
  );

  const enterView = useCallback(
    (btnRef) => {
      changeView(`MonthView`, `${year}01`);
    },
    [year, changeView]
  );

  return (
    <Cell
      tdStyle={{
        padding: "0px",
        height: "50px",
        textAlign: "center",
        verticalAlign: "inherit",
      }}
      btnStyle={{ color, backgroundColor: bgColor }}
      onFocus={markRedCircle}
      onBlur={cancelRedCircle}
      onDoubleClick={enterView}
      value={year}
      btnClass="yearCell"
    ></Cell>
  );
}
