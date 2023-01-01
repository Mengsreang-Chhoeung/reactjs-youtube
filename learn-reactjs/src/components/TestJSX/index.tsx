const name = "React";
const greetingTitle = "JavaScript";

function TestJSX() {
  return (
    <>
      <h1>
        Hello {name} {1 + 2}
      </h1>
      <h1 title={greetingTitle}>Hello JavaScript</h1>
    </>
  );
}

export default TestJSX;
