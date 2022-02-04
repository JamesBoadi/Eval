import React, { useEffect } from "react";
import List from "./List";

export type Graph = {
  Coordinates: Coordinates;
};

export interface Coordinates {
  x: number;
  y: number;
}

//let list = new List<Graph>();
//   let x = list.get().Coordinates.x;
// let y = list.get().Coordinates.y;

export default function Box() {
  const renderBox = () => {
    return <rect width="300" height="100" 
    style={{ color: "yellow" }} />;
  };

  return (
    <>
      <svg width="400" height="110">
        {renderBox()}
      </svg>

    </>
  );
}

