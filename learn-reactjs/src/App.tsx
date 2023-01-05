import Greeting, { Greeting1, Greeting2 } from "./components/Greeting";
import TestJSX from "./components/TestJSX";
import TestProps from "./components/TestProps";

function App() {
  return (
    <div>
      {/* <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting1 />
      <Greeting2 />
      <TestJSX /> */}
      <TestProps h1Description={"Hello World"} />
      <TestProps h1Description={"Hello React"} />
    </div>
  )
}

export default App
