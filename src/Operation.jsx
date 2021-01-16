import React, { useState } from "react";

export default function Operation({ addOperator, getResult }) {
  function handleAddOperator(evt) {
    addOperator(evt);
  }

  function handleGetResult(evt) {
    getResult(evt);
  }

  return (
    <>
      <button
        onClick={(evt) => handleAddOperator(evt.target.textContent)}
        className="grid-column-4 orange"
      >
        ÷
      </button>
      <button
        onClick={(evt) => handleAddOperator(evt.target.textContent)}
        className="grid-column-4 orange"
      >
        ×
      </button>
      <button
        onClick={(evt) => handleAddOperator(evt.target.textContent)}
        className="grid-column-4 orange"
      >
        −
      </button>
      <button
        onClick={(evt) => handleAddOperator(evt.target.textContent)}
        className="grid-column-4 orange"
      >
        +
      </button>
      <button
        onClick={(evt) => handleGetResult(evt.target.textContent)}
        className="grid-column-4 grid-row-6 orange bottom-right-btn"
      >
        =
      </button>
    </>
  );
}
