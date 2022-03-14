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
  id: number;
  color?: string;
  className: string;
}

export default function Box(props: Props) {
  const cache = new Cache<Graph>();

  function setCoordinates(e: React.MouseEvent<SVGRectElement>) {
    const clientX = e.clientX;
    const clientY = e.clientY;

    const id = props.id;

    if (cache.containsKey(id) !== false) {
      cache.add(id, { Coordinates: { x: clientX, y: clientY } });
      console.log(
        cache.get(id).Coordinates.x + " two " + cache.get(id).Coordinates.y
      );
      return;
    }

    cache.update(id, { Coordinates: { x: clientX, y: clientY } });
    console.log(
      cache.get(id).Coordinates.x + " one " + cache.get(id).Coordinates.y
    );
  }

  const renderBox = () => {
    return (
      <rect
        onMouseMove={(e) => {
          setCoordinates(e);
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
