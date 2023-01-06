import React, { useState } from "react";
import { nanoid } from "nanoid";
import MonthCell from "./MonthCell";

export default function MonthView(props) {
  const { changeView } = props;
  const [year, setYear] = useState(parseInt(props.year));
  let monthCells = [
    [
      { name: `Jan`, month: `01` },
      { name: `Feb`, month: `02` },
      { name: `Mar`, month: `03` },
      { name: `Apr`, month: `04` },
    ],
    [
      { name: `May`, month: `05` },
      { name: `Jun`, month: `06` },
      { name: `Jul`, month: `07` },
      { name: `Aug`, month: `08` },
    ],
    [
      { name: `Sep`, month: `09` },
      { name: `Oct`, month: `10` },
      { name: `Nov`, month: `11` },
      { name: `Dec`, month: `12` },
    ],
  ];

  monthCells = monthCells.map((rows) => {
    const rowsResult = rows.map((monthObj) => {
      return (
        <MonthCell
          key={nanoid()}
          year={year}
          monthObj={monthObj}
          changeView={changeView}
        ></MonthCell>
      );
    });
    return <tr key={nanoid()}>{rowsResult}</tr>;
  });

  const previous = () => {
    setYear(year - 1);
  };

  const next = () => {
    setYear(year + 1);
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
          id="MonthViewTitle"
          onClick={() => {
            changeView(`YearView`, `${year}01`);
          }}
        >
          {year}
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
        <tbody>{monthCells}</tbody>
      </table>
    </div>
  );
}
