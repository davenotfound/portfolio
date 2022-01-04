import React from "react";
import "./socials.styles.scss";

class Socials extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      socialLinks: [
        {
          linkName: "LINKEDIN",
          url: "https://www.linkedin.com/in/davenotfound",
          typed: "",
        },
        {
          linkName: "GITHUB",
          url: "https://github.com/davenotfound",
          typed: "",
        },
        {
          linkName: "EMAIL",
          url: "",
          typed: "",
        },
      ],
    };
  }

  typeChar = (link, idx) => {
    const { typed, linkName } = link;
    const newTyped = `${link.typed}${linkName.substr(typed.length)[0]}`;
    const moreToType = newTyped.length !== linkName.length;

    const links = this.state.socialLinks;
    links[idx].typed = newTyped;
    link = links[idx];
    this.setState(links, () => {
      if (moreToType) {
        setTimeout(() => this.typeChar(link, idx), idx * 20 + 55);
      }
    });
  };

  animate = () => {
    setTimeout(() => {
      this.state.socialLinks.forEach((link, idx) => this.typeChar(link, idx))
    }, 2200);
  };

  componentDidMount() {
    this.animate();
  }

  render() {
    return (
      <div className="socials">
        <ul>
          {this.state.socialLinks.map((linkItem, index) => (
            <li
              key={index}
              className={`${this.props.beginAnimation ? "active" : ""} link`}
            >
              <a className="hover-underline-animation inverted" href={`${linkItem.url}`} target="_blank" rel="noreferrer">
                {linkItem.typed}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Socials;
