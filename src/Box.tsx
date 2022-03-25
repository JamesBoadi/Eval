import React, { useDebugValue, useEffect, useState } from "react";
import Cache from "./Cache";
import DrawLine from "./DrawLine";

type Graph = {
  Coordinates: Coordinates;
};

interface Coordinates {
  x1?: string | number;
  y1?: string | number;
  x2?: string | number;
  y2?: string | number;
}

interface Props {
  id: number;
  color?: string;
  className: string;
  x: string | number;
  y: string | number;
}

const cache = new Cache<Graph>();

export default function Box(props: Props) {
  const [lineStart, setLineStart] = useState<Graph | undefined>(undefined);
  const [lineEnd, setLineEnd] = useState<Graph | undefined>(undefined);
  const [isDragging, setIsDragging] = useState(false);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  let id = props.id;

  function setStartCoordinates(e: React.MouseEvent<HTMLDivElement>) {
    //e.preventDefault();
    const pageX = e.pageX;
    const pageY = e.pageY;
    const prevCoor = cache.get(id);

    const coordinates = {
      Coordinates: {
        x1: pageX,
        y1: pageY,
        x2: prevCoor?.Coordinates.x2,
        y2: prevCoor?.Coordinates.y2
      }
    };

    cache.add(id, coordinates);
    setLineStart(coordinates);
  }

  function setEndCoordinates(e: React.MouseEvent<SVGRectElement>) {
    //e.preventDefault();
    const pageX = e.pageX;
    const pageY = e.pageY;
    const prevCoor = cache.get(id);

    if (pageX && pageY !== undefined) {
      const coordinates = {
        Coordinates: {
          x1: prevCoor?.Coordinates.x1,
          y1: prevCoor?.Coordinates.y1,
          x2: pageX,
          y2: pageY
        }
      };

      if (cache.containsKey(id) === false) {
        cache.add(id, coordinates);
        return;
      }

      cache.update(id, coordinates);
      setLineEnd(coordinates);
    }
  }

  function handleDragStart(e: React.MouseEvent<any>) {
    if (e.type === "mousemove" && isDragging) {
      setEndCoordinates(e); // Set ending coordinates
    } else if (e.type === "mousedown") {
      setIsDragging(true);
      setStartCoordinates(e);
    }
  }

  function reset() {
    setLineStart(undefined);
    setLineEnd(undefined);
    cache.clear();
  }

  function handleDragEnd(e: React.MouseEvent<any>) {
    setIsDragging(false);
    reset();
  }

  const renderBox = () => {
    return (
      <rect
        onMouseDown={(e) => {
          handleDragStart(e);
        }}
        onMouseUp={(e) => {
          handleDragEnd(e);
        }}
        onMouseMove={(e) => {
          handleDragStart(e);
        }}
        width="400" // can also adjust to loading bar animation
        height="100"
        x={props.x} // will be needed for interactive game
        y={props.y}
        style={{ fill: `${props.color}` }}
        // style={{ backgroundColor:`${props.color}`}}
      />
    );
  };

  return <>{renderBox()}</>;
}
