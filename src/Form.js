import React from 'react'

 const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  export class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = { email: ""};
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
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
      const { email } = this.state;
      return (
        <form netlify netlify-honeypot="bot-field" hidden onSubmit={this.handleSubmit}>
          <p>
              <input placeholder="youremail@kingblck.com" type="email" name="email" value={email} onChange={this.handleChange} />
          </p>
          <p>
            <button type="submit">s u b m i t</button>
          </p>
        </form>
      );
    }
  }
