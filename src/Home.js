import React from "react";

function Home({ logo, time }) {
  return (
    <React.Fragment>
      <br />
      <hr />
      <i>{time}</i>
      <h1>Pure React Learning</h1>

      <img className="App-logo" src={logo} alt="Logo" />
    </React.Fragment>
  );
}

export default Home;
