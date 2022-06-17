import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, message };
    fetch("http://localhost:3000/api/postContact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      setname("");
      setemail("");
      setphone("");
      setmessage("");
      alert("Thanks for contacting us...");
  };
  const handelChange = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "message") {
      setmessage(e.target.value);
    }
  };

  const data = { username: "example" };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Contact Us</h1>
        <form className={styles.form} onSubmit={handelSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handelChange}
            placeholder="Enter your Name"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handelChange}
            placeholder="Enter your email"
          />
          <input
            type="phone"
            id="phone"
            name="phone"
            onChange={handelChange}
            value={phone}
            placeholder="Enter your number"
          />
          <textarea
            name="message"
            id="message"
            value={message}
            cols="30"
            onChange={handelChange}
            rows="10"
            placeholder="Write your concern here"
          ></textarea>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
