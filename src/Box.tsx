import React, { useEffect } from "react";
import List from "./List";

export type Graph = {
  Coordinates: Coordinates;
};

export interface Coordinates {
  x: number;
  y: number;
}

export interface Pos {
  prevX: number;
  prevY: number;
  currX: number;
  currY: number;
}

interface Props {
  color?: string;
  className?: string;
}

//let list = new List<Graph>();
//   let x = list.get().Coordinates.x;
// let y = list.get().Coordinates.y;

export default function Box(props: Props) {
  const renderBox = () => {
    return (
      <rect
        onMouseEnter={(e) => {
          console.log(`${props.className}`);
        }}
        width="300"
        height="100"
        style={{ color: props.color }}
      />
    );
  };

  return (
    <>
      <svg width="400" height="110">
        {renderBox()}
      </svg>
    </>
  );
}


