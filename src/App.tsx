import React from "react";
import Visualization from "./Visualization";

const values =
{
  previewPage: false,
  editPage: false
}

export default function App() {
  
  return (
    <>
      <Visualization {...values}> </Visualization>
    </>
  );
}
