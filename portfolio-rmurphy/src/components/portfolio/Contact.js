import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./Contact.module.css";

function ContactForm(props) {
  const nameInputRef = useRef();
  const companyInputRef = useRef();
  const emailInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    alert("Back end under construction, please contact me directly");

    const enteredName = nameInputRef.current.value;
    const enteredCompany = companyInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const contactData = {
      title: enteredName,
      company: enteredCompany,
      email: enteredEmail,
      description: enteredDescription,
    };

    props.onAddContact(contactData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Your name</label>
          <input type="text" required id="title" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Company</label>
          <input type="text" required id="company" ref={companyInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Email Address</label>
          <input type="email" required id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Contact Request</button>
        </div>
      </form>
    </Card>
  );
}

export default ContactForm;
