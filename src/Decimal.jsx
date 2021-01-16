import React from "react";

export default function Decimal({ addDemical }) {
  function handleAddDemical(evt) {
    addDemical(evt);
  }

  return (
    <button
      onClick={(evt) => handleAddDemical(evt.target.textContent)}
      className="grid-row-6 light-gray"
    >
      .
    </button>
  );
}
