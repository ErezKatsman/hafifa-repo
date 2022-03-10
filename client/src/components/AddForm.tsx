import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { duckActions } from "../store/duck/duck.action";

export default function AddForm() {
  const dispach = useDispatch();
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const addHandler = () => {
    dispach(duckActions.addDuckAction({ name, color }));
    setColor("");
    setName("");
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <button onClick={addHandler}>ADD</button>
    </div>
  );
}
