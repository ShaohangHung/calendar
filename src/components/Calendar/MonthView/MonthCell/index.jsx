import React, { useState, useCallback } from "react";
import Cell from "../../Cell";

export default function MonthCell(props) {
  const { year, monthObj, changeView } = props;
  const [bgColor, setBgColor] = useState("white");
  const [color, setColor] = useState(props.color);

  const markRedCircle = useCallback((btnRef) => {
    setColor("white");
    setBgColor("red");
  }, []);

  const cancelRedCircle = useCallback((btnRef) => {
    setColor("black");
    setBgColor("white");
  }, []);

  const enterView = useCallback(
    (btnRef) => {
      changeView(`DateView`, `${year}${monthObj.month}`);
    },
    [year, monthObj, changeView]
  );

  return (
    <Cell
      tdStyle={{
        padding: "0px",
        height: "50px",
        width: "25%",
        textAlign: "center",
        verticalAlign: "inherit",
      }}
      btnStyle={{ color, backgroundColor: bgColor }}
      onFocus={markRedCircle}
      onBlur={cancelRedCircle}
      onDoubleClick={enterView}
      value={monthObj.name}
      btnClass="monthCell"
    ></Cell>
  );
}
