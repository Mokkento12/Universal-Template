import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email format";
    }
    if (!message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
          alert("Your message has been sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          alert("Failed to send your message. Please try again later.");
        }
      } catch (error) {
        alert("Network error. Please check your connection.");
        console.error("Error submitting form:", error);
      } finally {
        setIsLoading(false);
      }
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
            placeholder="Enter your name"
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
            placeholder="Enter your email address"
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
            placeholder="Type your message here"
            required
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
