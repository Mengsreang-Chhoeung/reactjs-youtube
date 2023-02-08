import Greeting, { Greeting1, Greeting2 } from "./components/Greeting";
import TestJSX from "./components/TestJSX";
import TestProps from "./components/TestProps";
import TestProps2 from "./components/TestProps/index2";

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
      {/* <TestProps h1Description={"Hello World"} />
      <TestProps h1Description={"Hello React"} /> */}
      <TestProps2 />
      <TestProps2 source="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </div>
  )
}

export default App
