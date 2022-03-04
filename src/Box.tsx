import React, { useEffect, useState } from "react";
import Cache from "./Cache";

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
  className: string;
}

export default function Box(props: Props) {
  const cache = new Cache<Graph>();

  function getCoordinates(e: React.MouseEvent<SVGRectElement>) {
    const clientX = e.clientX;
    const clientY = e.clientY;

    cache.

    // cache.add(0,0);
    if(cache.containsKey(0) !== false)
    {
      cache.update(0);
    }
      

   // list.add(0, {clientX)
  //  console.log("clientX " + clientX);
  //  console.log("clientY " + clientY);
  }

  //
  //   let x = list.get().Coordinates.x;
  // let y = list.get().Coordinates.y;

  const renderBox = () => {
    return (
      <rect
        onMouseMove={(e) => {
          getCoordinates(e);
        }}
        width="400" // can also adjust to loading bar animation
        height="100"
        style={{ fill: `${props.color}` }}
        // style={{ backgroundColor:`${props.color}`}}
      />
    );
  };

  return (
    <>
      <svg>{renderBox()}</svg>
    </>
  );
}
