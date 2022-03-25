import React, { useEffect } from "react";
import Cache from "./Cache";

interface currPos {
  currX: number;
  currY: number;
}

interface Props {
  isDragging: boolean;
  x1?: string | number;
  y1?: string | number;
  x2?: string | number;
  y2?: string | number;
}

export default function DrawLine(props: Props) {
  console.log(props.x1+  " one "+ props.y1);
  console.log(props.x2+  " two "+ props.y2);

  return (
    <>
      {props.isDragging && (
        <>
          <defs>
            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="7"
              refX="0"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="rgb(60, 179, 99)" />
            </marker>
          </defs>
          <line
            x1={props.x1}
            y1={props.y1}
            x2={props.x2}
            y2={props.y2}
            stroke="rgb(60, 179, 99)"
            strokeWidth="6"
            markerEnd="url(#arrow)"
          />
        </>
      )}
    </>
  );
}
