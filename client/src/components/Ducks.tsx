import React from "react";
import { connect } from "react-redux";
import { IDuck } from "../../../shared/interfaces";
import { duckSelector } from "../store/duck/duck.selector";
import { IRootState } from "../store/root/root.interface";
import Duck from "./Duck";

interface IConnectedProps {
  ducks: IDuck[];
}

interface IOwnProps {
  title: string;
}

type IDucksProps = IConnectedProps & IOwnProps;

function Ducks(props: IDucksProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.ducks.map((duck) => (
        <Duck key={duck.id} duck={duck} />
      ))}
    </div>
  );
}

function mapStateToProps(state: IRootState, ownProp: IOwnProps): IDucksProps {
  return {
    ducks: duckSelector.allducksSelector(state),
    ...ownProp,
  };
}

export default connect(mapStateToProps)(Ducks);
