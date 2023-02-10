import Greeting, { Greeting1, Greeting2 } from "./components/Greeting";
import TestJSX from "./components/TestJSX";
import TestProps from "./components/TestProps";
import TestProps2 from "./components/TestProps/index2";
import TestProps3 from "./components/TestProps/index3";

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
      {/* <TestProps2 />
      <TestProps2 source="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> */}
      <TestProps3 title={"Article 1"}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio necessitatibus vitae ipsa, beatae nobis provident reprehenderit fugit, impedit quo consequatur totam accusantium deserunt. Sunt, natus.
      </TestProps3>
      <TestProps3 title={"Article 2"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui porro, officiis non alias repellat facere aliquid libero facilis tenetur possimus vitae quae voluptatum ducimus dolor nostrum officia tempore explicabo.
      </TestProps3>
      <TestProps3 title={"Article 3"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quis id dicta error expedita perspiciatis hic, nostrum fugiat aut facere quisquam amet molestias ipsum alias adipisci laboriosam quos voluptatum vitae saepe magnam corrupti. Eum distinctio quasi maxime sint id omnis!
      </TestProps3>
    </div>
  )
}

export default App
