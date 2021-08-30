import "./styles.css";
import {
  Accordian,
  AccordianContent,
  AccordianHeading,
  AccordianPanel
} from "./Accordian";

export default function App() {
  return (
    <div className="App">
      <Accordian>
        <AccordianPanel id="1">
          <AccordianHeading>heading 1</AccordianHeading>
          <AccordianContent>some content 1</AccordianContent>
        </AccordianPanel>
        <AccordianPanel id="2">
          <AccordianHeading>heading 2</AccordianHeading>
          <AccordianContent>some content 2</AccordianContent>
        </AccordianPanel>
      </Accordian>
    </div>
  );
}
