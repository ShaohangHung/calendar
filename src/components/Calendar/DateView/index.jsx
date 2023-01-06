import React from "react";
import { nanoid } from "nanoid";
import getTheDateOfTheWeek from "./getTheDateOfTheWeek";
import DateCell from "./DateCell";
import moment from "moment";
import "./index.css";

export default function DateView(props) {
  const { yearMonth, changeView, closeCalendar, onSelect, setYearMonth } =
    props;
  const year = parseInt(yearMonth.slice(0, 4));
  const month = parseInt(yearMonth.slice(4, 6));

  let dateCells = [];
  const theDayOfTheWeek = getTheDateOfTheWeek(year, month, 1);
  const firstDateOfTheMonth = moment(`${yearMonth}01`);
  let currentDate = firstDateOfTheMonth.subtract(theDayOfTheWeek, "days");
  let currentWeek = [];
  for (let i = 0; i < 42; i++) {
    const yyyymmdd = currentDate.format("YYYYMMDD");
    currentWeek.push(yyyymmdd);

    if (currentWeek.length === 7) {
      dateCells.push(currentWeek);
      currentWeek = [];
    }
    currentDate = currentDate.add(1, "days");
  }

  const today = moment().format("YYYYMMDD");
  dateCells = dateCells.map((week) => {
    let dates = week.map((yyyymmdd) => {
      const curMonth = parseInt(yyyymmdd.slice(4, 6));
      let color = curMonth === month ? "black" : "#eeeeee";
      if (yyyymmdd === today) {
        color = "#db3d44";
      }
      return (
        <DateCell
          key={nanoid()}
          color={color}
          month={month}
          yyyymmdd={yyyymmdd}
          closeCalendar={closeCalendar}
          onSelect={onSelect}
        />
      );
    });
    return <tr key={nanoid()}>{dates}</tr>;
  });

  const previous = () => {
    const lastMonth = moment(`${yearMonth}01`)
      .subtract(1, `months`)
      .format(`YYYYMM`);
    setYearMonth(lastMonth);
  };

  const next = () => {
    const nextMonth = moment(`${yearMonth}01`)
      .add(1, `months`)
      .format(`YYYYMM`);
    setYearMonth(nextMonth);
  };

  return (
    <div className="card">
      <div className="form-inline">
        <button
          className="btn btn-outline-primary col-sm-3"
          id="previous"
          onClick={previous}
        >
          ＜
        </button>
        <h3
          className="card-header text-center col-sm-6"
          id="DateViewTitle"
          onClick={() => {
            changeView(`MonthView`, yearMonth);
          }}
        >
          {moment(`${yearMonth}01`).format("MMM YYYY")}
        </h3>
        <button
          className="btn btn-outline-primary col-sm-3"
          id="next"
          onClick={next}
        >
          ＞
        </button>
      </div>
      <table className="table table-bordered table-responsive-sm" id="calendar">
        <thead>
          <tr>
            <th className="dateHeader" scope="col">
              Su
            </th>
            <th className="dateHeader" scope="col">
              Mo
            </th>
            <th className="dateHeader" scope="col">
              Tu
            </th>
            <th className="dateHeader" scope="col">
              We
            </th>
            <th className="dateHeader" scope="col">
              Th
            </th>
            <th className="dateHeader" scope="col">
              Fr
            </th>
            <th className="dateHeader" scope="col">
              Sa
            </th>
          </tr>
        </thead>
        <tbody>{dateCells}</tbody>
      </table>
    </div>
  );
}
