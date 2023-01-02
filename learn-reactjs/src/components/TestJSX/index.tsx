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
    </>
  );
}

export default TestJSX;
