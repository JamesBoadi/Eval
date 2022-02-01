import React, { useEffect } from "react";
import Visualization from "./Visualization";

const values =
{
  previewPage: false,
  editPage: false
}

export default function App() {

  useEffect(() => {
    console.log("Effect");
  }, []);



  return (
    <>
      <Visualization {...values}> </Visualization>
    </>
  );
}
