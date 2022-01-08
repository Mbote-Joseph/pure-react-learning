import React from "react";
import "./Tweet.css";
import moment from "moment";

function Avatar({ hash }) {
  var url = `https://github.com/${hash}`;
  return (
    <div className="avatar">
      <img
        style={{ height: "48px", borderRadius: "5px" }}
        src={url}
        alt="avatarIcon"
      />
    </div>
  );
}

function Message({ message }) {
  return <div className="message">{message}</div>;
}

function NameWithHandle({ name }) {
  return (
    <span className="name-with-handle">
      <span className="name">{name.name}</span>
      <span className="handle">@{name.handle}</span>
    </span>
  );
}

const Time = ({ timestamp }) => {
  const timeString = moment(timestamp).fromNow();
  return <span className="time">{timeString}</span>;
};

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => (
  <span className="retweetbutton">
    <i className="fa fa-retweet " />
    {getRetweetCount(count)}
  </span>
);

const LikeButton = ({ count }) => (
  <span className="likebutton">
    <i className="fa fa-heart " />
    {count > 0 && <span className="like-count">{count}</span>}
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

function TweetProps({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle name={tweet.author} />
        <Time timestamp={tweet.timestamp} />

        <Message message={tweet.message} />
        <br />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

export default TweetProps;
