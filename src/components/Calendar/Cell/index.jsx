import { nanoid } from "nanoid";
import React from "react";
import "./index.css";

export default function Cell(props) {
  const {
    btnId,
    value,
    onFocus,
    onBlur,
    onClick,
    onDoubleClick,
    tdStyle,
    btnStyle,
    btnClass,
  } = props;
  const callOnFocus = (btnRef) => {
    if (onFocus) {
      onFocus(btnRef);
    }
  };

  const callOnBlur = (btnRef) => {
    if (onBlur) {
      onBlur(btnRef);
    }
  };

  const callOnClick = (btnRef) => {
    if (onClick) {
      onClick(btnRef);
    }
  };

  const callOnDoubleClick = (btnRef) => {
    if (onDoubleClick) {
      onDoubleClick(btnRef);
    }
  };

  return (
    <td style={tdStyle}>
      <button
        id={btnId ? btnId : nanoid()}
        className={btnClass}
        style={btnStyle}
        onFocus={(btnRef) => {
          callOnFocus(btnRef);
        }}
        onBlur={(btnRef) => {
          callOnBlur(btnRef);
        }}
        onClick={(btnRef) => {
          callOnClick(btnRef);
        }}
        onDoubleClick={(btnRef) => {
          callOnDoubleClick(btnRef);
        }}
      >
        {value}
      </button>
    </td>
  );
}
