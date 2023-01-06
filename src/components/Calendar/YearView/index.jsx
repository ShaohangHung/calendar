import React, { useState } from "react";
import { nanoid } from "nanoid";
import YearCell from "./YearCell";

export default function YearView(props) {
  const { changeView } = props;
  const [year, setYear] = useState(parseInt(props.year));

  const firstThreeNumOfYear = year.toString().slice(0, 3);
  const startDecades = parseInt(`${firstThreeNumOfYear}0`);
  let yearCells = [];
  let currentRows = [];
  for (let i = -1; i < 11; i++) {
    let color = "black";
    if ([-1, 10].includes(i)) {
      color = "#eeeeee";
    }
    currentRows.push({
      year: startDecades + i,
      color,
      startDecades: startDecades,
    });
    if (currentRows.length === 4) {
      yearCells.push(currentRows);
      currentRows = [];
    }
  }

  yearCells = yearCells.map((rows) => {
    const rowsResult = rows.map((yearObj) => {
      return (
        <YearCell
          key={nanoid()}
          yearObj={yearObj}
          changeView={changeView}
        ></YearCell>
      );
    });
    return <tr key={nanoid()}>{rowsResult}</tr>;
  });

  const previous = () => {
    setYear(startDecades - 10);
  };

  const next = () => {
    setYear(startDecades + 10);
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
        <h3 className="card-header text-center col-sm-6" id="YearViewTitle">
          {`${firstThreeNumOfYear}0~${firstThreeNumOfYear}9`}
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
        <tbody>{yearCells}</tbody>
      </table>
    </div>
  );
}
