import React from "react";

export default function FunctionOperation({ clear, addModuus, addSign }) {
  function handleClear() {
    clear();
  }

  function handleAddModuus() {
    addModuus();
  }

  function handleAddSign() {
    addSign();
  }

  return (
    <>
      <button onClick={() => handleClear()} className="darker-gray">
        AC
      </button>
      <button onClick={() => handleAddSign()} className="darker-gray">
        ±
      </button>
      <button onClick={() => handleAddModuus()} className="darker-gray">
        %
      </button>
    </>
  );
}
