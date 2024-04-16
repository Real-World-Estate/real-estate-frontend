import { useState } from "react";

function SortButton({ sortBy, number }) {
  const [activeStatus, setActiveStatus] = useState("false");
  return (
    <button
      className={`${activeStatus === true ? "btn-active" : ""}`}
      onClick={() => setActiveStatus(!activeStatus)}
    >
      {sortBy} <span>{number}</span>
    </button>
  );
}

export default SortButton;
