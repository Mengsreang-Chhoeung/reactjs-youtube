import Item from "./components/ConditionalRendering";
import Greeting, { Greeting1, Greeting2 } from "./components/Greeting";
import FilterStudent from "./components/RenderingList/FilterStudent";
import People from "./components/RenderingList/People";
import Student from "./components/RenderingList/Student";
import StateDemo from "./components/State";
import ArrayState from "./components/State/Array";
import ObjectState from "./components/State/Object";
import TestJSX from "./components/TestJSX";
import TestProps from "./components/TestProps";
import TestProps2 from "./components/TestProps/index2";
import TestProps3 from "./components/TestProps/index3";
import Button from "./components/TestProps/index4";
import DeclarativelyUi from "./components/DeclarativelyUi";
import ParentComponent from "./components/PropsInState/ParentComponent";
import TravelPlan from "./components/NestedState/TravelPlan";
import Accordion from "./components/SharingStateBetweenComponents/Accordion";
import TaskApp from "./components/TaskApp";
import Level from "./components/LevelContext";
import Counter from "./components/Counter";
import TaskApp2 from "./components/TaskApp2";
import ReferenceApp from "./components/Reference";

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
      {/* <h1 style={{ color: 'red' }}>Hello World</h1>
      <TestProps3 style={{ color: 'red' }} styleTitle={{ color: 'blue' }} title={"Article 1"}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio necessitatibus vitae ipsa, beatae nobis provident reprehenderit fugit, impedit quo consequatur totam accusantium deserunt. Sunt, natus.
      </TestProps3>
      <TestProps3 title={"Article 2"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui porro, officiis non alias repellat facere aliquid libero facilis tenetur possimus vitae quae voluptatum ducimus dolor nostrum officia tempore explicabo.
      </TestProps3>
      <TestProps3 title={"Article 3"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quis id dicta error expedita perspiciatis hic, nostrum fugiat aut facere quisquam amet molestias ipsum alias adipisci laboriosam quos voluptatum vitae saepe magnam corrupti. Eum distinctio quasi maxime sint id omnis!
      </TestProps3> */}

      {/* <Button style={{ backgroundColor: "red" }} /> */}

      {/* <ul>
        <Item name={"Space suit"} isPacked={true} />
        <Item name={"Helmet with a golden leaf"} isPacked={true} />
        <Item name={"Photo of Tam"} isPacked={false} />
      </ul> */}

      {/* <People /> */}

      {/* <Student /> */}

      {/* <FilterStudent /> */}

      {/* <StateDemo /> */}

      {/* <ObjectState /> */}

      {/* <ArrayState /> */}

      {/* <DeclarativelyUi /> */}

      {/* <ParentComponent /> */}

      {/* <TravelPlan /> */}

      {/* <Accordion /> */}

      {/* <TaskApp /> */}

      {/* <Level /> */}

      {/* <Counter /> */}

      {/* <TaskApp2 /> */}

      <ReferenceApp />
    </div>
  );
}

export default App;
