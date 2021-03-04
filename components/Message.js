import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import SuccessMessage from "../components/SuccessMessage";

const Message = (props) => {
  const [message, setMessage] = useState("");
  const [messageSuccess, setMessageSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zr5224k",
        "template_eo83cnr",
        e.target,
        "user_cUDGxCajC3J07prrCf4OQ"
      )
      .then(
        (result) => {
          setMessageSuccess(true);
        },
        (error) => {
          setMessageSuccess(false);
        }
      );

    setMessage("");
  };
  return (
    <div className="message">
      <p>{props.message}</p>
      {messageSuccess === true ? (
        <SuccessMessage message={messageSuccess} />
      ) : messageSuccess === null ? (
        ""
      ) : (
        <SuccessMessage message={messageSuccess} />
      )}
      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          placeholder="Enter font name"
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="btn btn-purple">
          Submit Font
        </button>
      </form>
    </div>
  );
};

export default Message;
