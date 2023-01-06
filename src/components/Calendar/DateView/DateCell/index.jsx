import React, { useState, useCallback } from "react";
import moment from "moment";
import Cell from "../../Cell";

export default function DateCell(props) {
  const { yyyymmdd, month, closeCalendar, onSelect } = props;
  const [bgColor, setBgColor] = useState("white");
  const [color, setColor] = useState(props.color);

  const curDate = parseInt(yyyymmdd.slice(6, 8));
  const markRedCircle = useCallback((btnRef) => {
    setColor("white");
    setBgColor("red");
  }, []);

  const cancelRedCircle = useCallback(
    (btnRef) => {
      const today = moment().format("YYYYMMDD");
      const curMonth = parseInt(yyyymmdd.slice(4, 6));
      curMonth === month ? setColor("black") : setColor("#eeeeee");
      if (yyyymmdd === today) {
        setColor("#db3d44");
      }
      setBgColor("white");
    },
    [yyyymmdd, month]
  );

  const setValue = useCallback(
    (btnRef) => {
      const input = document.getElementById("dateInput");
      const yyymmddDash = moment(yyyymmdd).format(`YYYY-MM-DD`);
      input.value = yyymmddDash;
      if (onSelect) {
        onSelect(moment(yyyymmdd), yyyymmdd);
      }
    },
    [yyyymmdd, onSelect]
  );

  const setValueAndClose = useCallback(
    (btnRef) => {
      const input = document.getElementById("dateInput");
      const yyymmddDash = moment(yyyymmdd).format(`YYYY-MM-DD`);
      input.value = yyymmddDash;
      input.dispatchEvent(new Event("change"));
      closeCalendar();
    },
    [yyyymmdd, closeCalendar]
  );

  return (
    <Cell
      btnId={yyyymmdd}
      tdStyle={{ padding: "0px", height: "65px" }}
      btnStyle={{ color, backgroundColor: bgColor }}
      onFocus={markRedCircle}
      onBlur={cancelRedCircle}
      onClick={setValue}
      onDoubleClick={setValueAndClose}
      value={curDate}
      btnClass="dateCell"
    ></Cell>
  );
}
