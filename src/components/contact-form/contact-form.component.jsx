import React from 'react'
import FormError from '../form-error/form-error.component';
import FormInput from '../form-input/form-input.component';
import "./contact-form.styles.scss"

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      subject: '',
      message: '',


      formErrors:{
        email: '',
        name: '',
        subject: '',
        message: ''
      },

      emailValid: false,
      nameValid: false,
      subjectValid: false,
      messageValid: false,
      formValid: false
    };
  }

  handleSubmit = (event) => {}

  handleChange = (event) => {
    console.log('fire');
    const {value, name} = event.target;

    this.setState({ [name]: value }, ()=> {this.validateField(name, value)});
  }

  handleBlur = (event) => {
    const {value, name} = event.target;
    this.validateField(name, value)
  }


  validateField(fieldName, value) {

    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let subjectValid = this.state.subjectValid;
    let messageValid = this.state.messageValid;

    switch(fieldName) {
      case 'email':
        if(value === '') {
          emailValid = false;
          fieldValidationErrors.email = 'email required';
          break;
        }
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'email is invalid';
        break;
      case 'name':
        nameValid = value !== '';
        fieldValidationErrors.name = nameValid ? '' : 'name required';
        break;
      case 'subject':
        subjectValid = value !== '';
        fieldValidationErrors.subject = subjectValid ? '' : 'subject required';
        break;
      case 'message':
        messageValid = value !== '';
        fieldValidationErrors.message = messageValid ? '' : 'message required';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    nameValid: nameValid,
                    subjectValid: subjectValid,
                    messageValid: messageValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.nameValid && this.state.subjectValid && this.state.messageValid});
  }

  //todo animate in form properly
  render() {
    return(
        <div className='form-container'>

          {/* <div className='overlay' style={ this.props.beginAnimation ? { animation:'slide 1s forwards', opacity: 1} : {animation : '', opacity: 0}} ></div> */}


          <form className='contact-form' onSubmit={this.handleSubmit}>
            <FormInput name="email" value={this.state.email} handleChange={this.handleChange} onBlur={this.handleBlur} label="EMAIL" required/>
            <FormError formError={this.state.formErrors['email']}/>

            <FormInput name="name" type="text" value={this.state.name} handleChange={this.handleChange} onBlur={this.handleBlur} label="NAME" required/>
            <FormError formError={this.state.formErrors['name']}/>

            <FormInput name="subject" type="text" value={this.state.subject} handleChange={this.handleChange} onBlur={this.handleBlur} label="SUBJECT" required/>
            <FormError formError={this.state.formErrors['subject']}/>

            <FormInput name="message" type="text" value={this.state.message} handleChange={this.handleChange} onBlur={this.handleBlur} label="MESSAGE" required/>
            <FormError formError={this.state.formErrors['message']}/>

            <div className="button-container">
              <button className='submit-button' disabled={!this.state.formValid} type='submit'>SEND</button>
            </div>
          </form>
        </div>
    );
  }
}

export default ContactForm;

        {/* <div className='overlay' style={ this.props.children.beginAnimation ? { animation:'slide 1s forwards', opacity: 1} : {animation : '', opacity: 0}}></div> */}
