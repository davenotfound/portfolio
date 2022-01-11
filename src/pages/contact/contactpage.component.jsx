import React from "react";
import ContactCentral from "../../components/contact-central/contact-central.component";
import Socials from "../../components/socials/socials.component";
import "./contactpage.styles.scss";
import ContactForm from "../../components/contact-form/contact-form.component";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beginAnimate: false,
    };
  }

  animate = () => {
    setTimeout(async () => {
      await this.setState({ beginAnimate: true });
    }, 2000);
  };

  componentDidMount() {
    this.animate();
  }

  render() {
    return (
      <div className="contact-page">
        <ContactCentral beginAnimation={this.state.beginAnimate} />
        <ContactForm beginAnimation={this.state.beginAnimate} />
        <Socials
          layoutStyle={"contact-layout"}
          beginAnimation={this.state.beginAnimate}
        />
      </div>
    );
  }
}

export default ContactPage;
