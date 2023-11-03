import { useState } from "react";
import { useDispatch } from "react-redux";
import { ChangeColor } from "../features/them";

function ChangeMyColor() {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(ChangeColor(color));
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default ChangeMyColor;
