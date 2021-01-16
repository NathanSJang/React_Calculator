import React, { useState } from "react";

export default function Digit({ addNumber }) {
  function handleAddNumber(evt) {
    addNumber(evt);
  }

  return (
    <>
      <button
        onClick={(evt) => handleAddNumber(evt.target.textContent)}
        className="digit-zero light-gray bottom-left-btn"
      >
        0
      </button>
      <button
        onClick={(evt) => handleAddNumber(evt.target.textContent)}
        className="grid-row-5 light-gray"
      >
        1
      </button>
      <button
        onClick={(evt) => handleAddNumber(evt.target.textContent)}
        className="grid-row-5 light-gray"
      >
        2
      </button>
      <button
        onClick={(evt) => handleAddNumber(evt.target.textContent)}
        className="grid-row-5 light-gray"
      >
        3
      </button>
      <button
        onClick={(evt) => handleAddNumber(evt.target.textContent)}
        className="grid-row-4 light-gray"
      >
        4
      </button>
      <button
        onClick={(evt) => handleAddNumber(evt.target.textContent)}
        className="grid-row-4 light-gray"
      >
        5
      </button>
      <button
        onClick={(evt) => handleAddNumber(evt.target.textContent)}
        className="grid-row-4 light-gray"
      >
        6
      </button>
      <button
        onClick={(evt) => handleAddNumber(evt.target.textContent)}
        className="grid-row-3 light-gray"
      >
        7
      </button>
      <button
        onClick={(evt) => handleAddNumber(evt.target.textContent)}
        className="grid-row-3 light-gray"
      >
        8
      </button>
      <button
        onClick={(evt) => handleAddNumber(evt.target.textContent)}
        className="grid-row-3 light-gray"
      >
        9
      </button>
    </>
  );
}
