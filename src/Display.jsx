import React from "react";

export default function Display({ number }) {
  return (
    <div className="display dark-gray">
      <div>
        {!!number.result
          ? number.result
          : !!number.current
          ? number.current
          : "0"}
      </div>
    </div>
  );
}
