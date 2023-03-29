import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [messenger, setMessenger] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [alert, setAlert] = useState("");
  const [sent, setSent] = useState("");

  const handleInputChange = (e) => {
    setSent("");
    const { name, value } = e.target;
    // if blank, send message saying "this field is required"
    if (value.length === 0) {
      setAlert(`Please include all fields`);
    } else {
      setAlert("");
    }
    if (name === "messenger") {
      console.log(name);
      console.log(value);
      setMessenger(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setAlert("Email is invalid");
      return;
    }

    if(messenger.length === 0 || email.length === 0 || message.length === 0 ) {
        setAlert("Please include all fields");
      return;
    }

    setSent(`Message sent!`);
    setMessenger("");
    setEmail("");
    setMessage("");
  };

  const styles = {
    instructions: {
      margin: "20px 0",
      fontSize: "20px"
    },

    form: {
      padding: "0 20px",
      lineHeight: "40px",
    },

    spacing: {
      marginTop: "20px"
    }
  };

  return (
    <div style={styles.form}>
      <p style={styles.instructions}>Please contact me through the form below.</p>
      <form>
        <div className="form-row">
          <div className="form-group col-4">
            <label for="messenger">Name</label>
            <input
              id="messenger"
              className="form-control"
              value={messenger}
              name="messenger"
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group col-4" style={styles.spacing}>
            <label for="email">Email Address</label>
            <input
              id="email"
              className="form-control"
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
          </div>
        </div>

        <div className="form-group col-10" style={styles.spacing}>
          <label for="message">Message</label>
          <textarea
            id="message"
            className="form-control"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Insert your message here"
          />
        </div>
        <button
          style={styles.spacing}
          className="btn btn-primary"
          type="button"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
      {alert && (
        <div className="alert alert-danger" role="alert">
          {alert}
        </div>
      )}
      {sent && (
        <div className="alert alert-success" role="alert">
          {sent}
        </div>
      )}
    </div>
  );
}
