import React, { useState } from "react";
import Input from "../UI/Input";
import classes from "./Contact.module.css";
import Button from "../UI/Button";

export default function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [description, setDescription] = useState();
  const [submitted, setSubmitted] = useState(false)
  function submitHandler()
  {
    const data = {name: name, email: email, description: description};

    setSubmitted(true)
  }

  return (
    <div className={classes.Contact}>
      {!submitted && (
        <>
          <h1>Contact Us!</h1>
          <Input placeholder="Name" type="text" onChange={(e) => setName(e.target.value)}/> <br />
          <Input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}/> <br />
          <textarea className={classes.textarea} placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
          <br />
          <Button onClick={submitHandler} className={classes.button}>
            Submit
          </Button>
        </>
      )}
      {submitted && (<h1> Thank You {name}! <br/> We will reach out to you soon on {email}. </h1>) }
    </div>
  );
}
