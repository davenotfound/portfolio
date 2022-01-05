import React from 'react'
import FormInput from '../form-input/form-input.component';
import "./contact-form.styles.scss"

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      subject: '',
      message: ''
    };
  }

  handleSubmit = (event) => {}

  handleChange = (event) => {
    const {value, name} = event.target;

    this.setState({ [name]: value });
  }


  render() {
    return(
        <div className='form-container'>
          <form className='contact-form' onSubmit={this.handleSubmit}>
            <FormInput name="email" value={this.state.email} handleChange={this.handleChange} label="EMAIL" required/>
            <FormInput name="name" type="text" value={this.state.name} handleChange={this.handleChange} label="NAME" required/>
            <FormInput name="subject" type="text" value={this.state.subject} handleChange={this.handleChange} label="SUBJECT" required/>
            <FormInput name="message" type="text" value={this.state.message} handleChange={this.handleChange} label="MESSAGE" required/>

            <div className="button-container">
              <button>boii</button>
            </div>
          </form>
        </div>
    );
  }
}

export default ContactForm;

        {/* <div className='overlay' style={ this.props.children.beginAnimation ? { animation:'slide 1s forwards', opacity: 1} : {animation : '', opacity: 0}}></div> */}
