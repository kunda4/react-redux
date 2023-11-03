import { useState } from "react";

function ChangeColor() {
  const [color, setColor] = useState("");

  return (
    <button
      type="text"
      onChange={(event) => {
        setColor(event.target.value);
      }}
    >
      Change Color
    </button>
  );
}

export default ChangeColor;
