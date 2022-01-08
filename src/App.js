import logo from "./logo.svg";
import "./App.css";
import FirstPart from "./FirstPart";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import { Exercise1 } from "./Exercise1";
import Tweet from "./Tweet";
import TweetProps from "./TweetProps";

var testTweet = {
  message: "Something good about Laptops.",
  gravatar: "Mbote-Joseph.png",
  author: {
    handle: "JoseMbote",
    name: "Mbote-Joseph",
  },
  likes: 2,
  retweets: 5,
  timestamp: "2022-01-07 23:24:30",
};

function App() {
  return (
    <div className="App">
      <Link to="">
        <button>Home</button>
      </Link>
      <Link to="first">
        <button>First Part</button>
      </Link>
      <Link to="exe1">
        <button>First Exercise</button>
      </Link>
      <Link to="tweet">
        <button>Tweet</button>
      </Link>
      <Link to="tweetprops">
        <button>Tweet Props</button>
      </Link>

      <Routes>
        <Route
          path="/"
          element={<Home logo={logo} time={new Date().toLocaleDateString()} />}
        />
        <Route path="first" element={<FirstPart />} />
        <Route path="exe1" element={<Exercise1 />} />
        <Route path="tweet" element={<Tweet />} />
        <Route path="tweetprops" element={<TweetProps tweet={testTweet} />} />
      </Routes>
    </div>
  );
}

export default App;
