import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!message) errors.message = "Message is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log({ name, email, message });
      // Здесь можно отправить данные на сервер
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Feel free to reach out for any inquiries or feedback.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
