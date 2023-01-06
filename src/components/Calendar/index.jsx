import React, { useState } from "react";
import DateView from "./DateView";
import MonthView from "./MonthView";
import YearView from "./YearView";
import moment from "moment";

export default function Calendar(props) {
  const { value, onSelect } = props;
  const [yearMonth, setYearMonth] = useState(
    value ? moment(value).format(`YYYYMM`) : moment().format(`YYYYMM`)
  );
  const [view, setView] = useState(`DateView`);
  const [showView, setShowView] = useState(false);

  const changeView = (newView, newYearMonth) => {
    setView(newView);
    setYearMonth(newYearMonth);
  };

  const showCalendar = () => {
    setShowView(true);
  };

  const closeCalendar = () => {
    setShowView(false);
  };

  const focusDate = (input) => {
    const inputValue = input.target.value;
    const yyyymm = moment(inputValue).format(`YYYYMM`);
    if (yyyymm !== `Invalid date` && yyyymm.length === 6) {
      setYearMonth(yyyymm);
      // const yyyymmdd = moment(inputValue).format(`YYYYMMDD`);
      // console.log(yyyymmdd);
      // if (yyyymmdd !== `Invalid date` && yyyymmdd.length === 8) {
      //   const dateCell = document.getElementById(yyyymmdd);
      //   console.log(dateCell);
      //   dateCell.focus();
      // }
    }
    if (!showView) {
      showCalendar();
    }
  };

  let viewResult;
  switch (view) {
    case `DateView`:
      viewResult = (
        <DateView
          yearMonth={yearMonth}
          changeView={changeView}
          closeCalendar={closeCalendar}
          setYearMonth={setYearMonth}
          value={value}
          onSelect={onSelect}
        />
      );
      break;
    case `MonthView`:
      viewResult = (
        <MonthView year={yearMonth.slice(0, 4)} changeView={changeView} />
      );
      break;
    case `YearView`:
      viewResult = (
        <YearView year={yearMonth.slice(0, 4)} changeView={changeView} />
      );
      break;
    default:
      break;
  }

  return (
    <div className="container col-sm-4 col-md-7 col-lg-4 mt-5">
      <input
        onClick={(input) => {
          showCalendar(input);
        }}
        id="dateInput"
        onChange={(input) => {
          if (input.target.value === ``) {
            closeCalendar();
            return;
          }
          focusDate(input);
        }}
        defaultValue={value}
      ></input>
      {showView ? viewResult : ""}
    </div>
  );
}
