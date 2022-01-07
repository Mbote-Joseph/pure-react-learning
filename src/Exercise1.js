import React from "react";

function Greeting() {
  const username = "Joseph";
  //   const username = undefined;
  {
    // Try all these variations
    // var username="root";
    // var username= undefined;
    // var username=null;
    // var username=false;
  }

  if (username) {
    return (
      <div>
        <h3>Hello, {username} !</h3>
      </div>
    );
  } else if (username === undefined || username === null) {
    return (
      <div>
        <h3>Not Logged in</h3>
      </div>
    );
  }
}

export function Exercise1() {
  return (
    <div className="book">
      <div className="title">The Title</div>
      <div className="author">The Autor</div>
      <ul className="stats">
        <li className="rating">5 stars</li>
        <li className="isbn">123-45678-910</li>
      </ul>
      <h4>Single Line</h4>
      <div>NewLine Test</div>
      <h4>Empty Line</h4>
      <div>Empty NewLines Here</div>
      <h4>Spaces with newlines</h4>
      <div>&nbsp; Non-breaking &nbsp; Spaces&nbsp;</div>
      <h4>Inserting spaces when content spans multiple lines</h4>
      <div>Line1 Line2</div>
      <h2>Using React.CreateElement</h2>
      {
        // React.createElement('div', null, "The Title")
      }

      <h2>Part 4</h2>
      <Greeting />
    </div>
  );
}
