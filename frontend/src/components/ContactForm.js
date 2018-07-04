import React, { Component } from 'react';
import FormInput from './FormInput';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}


class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("https://vibrant-williams-16080d.netlify.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });


  render() {
    const { name, email, message } = this.state;

    return (
      <form  onSubmit={this.handleSubmit} name="contact">
        <h2 className="text-center">Contact Form</h2>
        <FormInput
          inputName="name"
          inputLabel="Your Name:"
          inputType="text"
          inputValue={ name }
          onInputChange={this.handleChange} />

        <FormInput
          inputName="email"
          inputLabel="Your Email:"
          inputType="email"
          inputValue={email}
          onInputChange={this.handleChange} />


        <p className="form-group">
          <label for="message">Message:</label>
          <textarea onChange={this.handleChange} className="form-control" id="message" name="message" value={message}></textarea>
        </p>
        <p className="form-group">
          <button className="btn btn-primary btn-lg hero-button"type="submit">Send</button>
        </p>
      </form>

    );

  }
};

export default ContactForm;