import React from "react";
import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Отслеживает изменения в полях ввода и обновляет состояние.

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  // Перехватывает стандартное поведение формы и выводит данные в консоль.

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert("Invalid email address");
      return;
    }

    if (name.trim() === "" || message.trim() === "") {
      alert("All fields are required!");
      return;
    }

    console.log("Form submitted successfully:", formData);
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
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
