import { CSSProperties } from "react";
import "./style.css";

const name = "React";
const greetingTitle = "JavaScript";

interface MyObject {
  id: number;
  name: string;
  position: string;
}

const myObject: MyObject = {
  name: "kok",
  id: 1,
  position: "Developer"
}

function TestJSX() {

  const myInternalCss: CSSProperties = {
    backgroundColor: "blue",
    color: "white"
  };

  return (
    <>
      <h1>
        Hello {name} {1 + 2}
      </h1>
      <h1 title={greetingTitle}>Hello JavaScript</h1>

      <ul> Object Person:
        <li>ID: {myObject["id"]}</li>
        <li>Name: {myObject.name.toUpperCase()}</li>
        <li>Position: {myObject.position}</li>
      </ul>


      {/* Inline CSS */}
      <h1
        style={{ backgroundColor: "red", color: "white" }}
      >Hello CSS</h1>

      {/* Internal CSS */}
      <h1 style={myInternalCss}>Hello Internal CSS</h1>

      {/* External CSS */}
      <h1 id="external-css">Hello External CSS</h1>
    </>
  );
}

export default TestJSX;
