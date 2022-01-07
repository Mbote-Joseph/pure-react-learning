import React from "react";
import "./Tweet.css";

function Avatar() {
  return (
    <div className="avatar">
      <img
        style={{ height: "48px", borderRadius: "5px" }}
        src="https://github.com/Mbote-Joseph.png"
        alt="avatarIcon"
      />
    </div>
  );
}

function Message() {
  return <div className="message">This is less than 140 characters</div>;
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Your Name</span>
      <span className="handle">@Yourhandle</span>
    </span>
  );
}

const Time = () => <span className="time">3hr ago</span>;

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;

const LikeButton = () => <i className="fa fa-heart like-button" />;

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle />
        <Time />
        <Message />
        <br />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
