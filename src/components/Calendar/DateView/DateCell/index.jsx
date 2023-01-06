import React, { useState } from "react";
import moment from "moment";
import "./index.css";

export default function DateCell(props) {
  const { yyyymmdd, month, closeCalendar, onSelect } = props;
  const [bgColor, setBgColor] = useState("white");
  const [color, setColor] = useState(props.color);

  const curDate = parseInt(yyyymmdd.slice(6, 8));
  const markRedCircle = () => {
    setColor("white");
    setBgColor("red");
  };

  const cancelRedCircle = () => {
    const today = moment().format("YYYYMMDD");
    const curMonth = parseInt(yyyymmdd.slice(4, 6));
    curMonth === month ? setColor("black") : setColor("#eeeeee");
    if (yyyymmdd === today) {
      setColor("#db3d44");
    }
    setBgColor("white");
  };

  const setValue = () => {
    const input = document.getElementById("dateInput");
    const yyymmddDash = moment(yyyymmdd).format(`YYYY-MM-DD`);
    input.value = yyymmddDash;
    if (onSelect) {
      onSelect(moment(yyyymmdd), yyyymmdd);
    }
  };

  const setValueAndClose = () => {
    const input = document.getElementById("dateInput");
    const yyymmddDash = moment(yyyymmdd).format(`YYYY-MM-DD`);
    input.value = yyymmddDash;
    input.dispatchEvent(new Event("change"));
    closeCalendar();
  };

  return (
    <td style={{ padding: "0px", height: "65px" }}>
      <button
        id={yyyymmdd}
        className="dateCell"
        style={{ color, backgroundColor: bgColor }}
        onFocus={markRedCircle}
        onBlur={cancelRedCircle}
        onClick={setValue}
        onDoubleClick={setValueAndClose}
      >
        {curDate}
      </button>
    </td>
  );
}
