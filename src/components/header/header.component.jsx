import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anim: [
        { t: "{ }", ms: 200 },
        { t: "{_}", ms: 200 },
        { t: "{ }", ms: 200 },
        { t: "{_}", ms: 200 },
        { t: "{D_}", ms: 100 },
        { t: "{DA_}", ms: 100 },
        { t: "{DAV_}", ms: 100 },
        { t: "{DAVE_}", ms: 100 },
        { t: "{DAVEN_}", ms: 100 },
        { t: "{DAVENO_}", ms: 100 },
        { t: "{DAVENOT_}", ms: 100 },
        { t: "{DAVENOTF_}", ms: 100 },
        { t: "{DAVENOTFO_}", ms: 100 },
        { t: "{DAVENOTFOU_}", ms: 200 },
        { t: "{DAVENOTFOUN_}", ms: 200 },
        { t: "{DAVENOTFOUND_}", ms: 200 },
        { t: "{DAVENOTFOUND }", ms: 200 },
        { t: "{DAVENOTFOUND_}", ms: 200 },
        { t: "{DAVENOTFOUND}", ms: 200 },
        { t: "DAVENOTFOUND", ms: 0 },
      ],
      text: "",
      stepDenominator: 1,
      i: 0,
      endAnim: false,
    };
  }

  introAnimate = async () => {
    if (window.localStorage.stepDenominator) {
      await this.setState({
        stepDenominator: window.localStorage.stepDenominator,
      });
    }

    let step = this.state.anim[this.state.i];
    await this.setState({ text: step.t });

    this.setState((prevState, props) => ({ i: prevState.i + 1 }));

    if (this.state.i < this.state.anim.length) {
      setTimeout(this.introAnimate, step.ms / this.state.stepDenominator);
    } else {
      await this.setState({ endAnim: true });
      window.localStorage.stepDenominator = 2;
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.beginAnimate !== this.props.beginAnimate) {
      this.introAnimate();
    }
  }

  render() {
    return (
      <div
        className={`${
          this.props.beginAnimate ? "active" : ""
        } header-container`}
      >
        <h1 className="logo">
          <a className="hover-underline-animation" href="/">
            {this.state.text}
          </a>
        </h1>
        <div className="nav-options">
          <a className="hover-underline-animation" href="/portfolio">
            PORTFOLIO
          </a>
          <a className="hover-underline-animation" href="/contact">
            CONTACT
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
