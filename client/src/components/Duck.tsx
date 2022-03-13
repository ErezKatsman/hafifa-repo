import React from "react";
import { useDispatch } from "react-redux";
import { IDuck } from "../../../shared/interfaces";
import { duckActions } from "../store/duck/duck.action";

interface IDuckProps {
  duck: IDuck;
}

export default function Duck({ duck }: IDuckProps) {
  const dispach = useDispatch();

  const deleteHandle = () => {
    dispach(duckActions.deleteDuckAction({ id: duck.id }));
  };
  return (
    <div>
      <div>
        <h2>{duck.id}</h2>
      </div>
      <button onClick={deleteHandle}>DELETE DUCK</button>
      <div>{duck.name}</div>
      <div>{duck.color}</div>
    </div>
  );
}
