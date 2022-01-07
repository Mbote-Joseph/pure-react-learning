import React, { useState } from "react";

function HelloWorld() {
  return (
    <div>
      <h1>Hello world ! I am learning React</h1>
    </div>
  );
}

function Hello() {
  return (
    <React.Fragment>
      <span>Hello </span>
    </React.Fragment>
  );
}
function World() {
  return (
    <React.Fragment>
      <span>World </span>
    </React.Fragment>
  );
}

function SubmitButton() {
  var buttonLabel = "Submit";
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <h2>The counter Value is {count} </h2>
      <button onClick={() => setCount(count + 1)}>{buttonLabel}</button>;
    </React.Fragment>
  );
}

function FirstPart() {
  return (
    <React.Fragment>
      <HelloWorld />
      <Hello /> <World /> !
      <br />
      <SubmitButton />
    </React.Fragment>
  );
}

export default FirstPart;
