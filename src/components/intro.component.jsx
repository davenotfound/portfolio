import React from 'react'

import "./intro.component.scss";

class IntroComponent extends React.Component{
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
        { t: "{DAVENOTFOUND}", ms: 200 }
      ],
      text: '',
      stepDenominator: 1,
      i: 0,
      endAnim: false,

    };
  }

  introAnimate = async () => {
    if (window.localStorage.stepDenominator) {
      await this.setState({stepDenominator: window.localStorage.stepDenominator});
    }

    let step = this.state.anim[this.state.i];
    await this.setState({text: step.t});

    this.setState((prevState, props) => ({i: prevState.i + 1 }));

    if (this.state.i < this.state.anim.length) {
        setTimeout(this.introAnimate, step.ms / this.state.stepDenominator);
    }
    else {
        console.log('in this brutha');
        await this.setState({endAnim: true})
        window.localStorage.stepDenominator = 2;
    }
  }

  componentDidMount() {
    this.introAnimate();
  }

  render() {
    return (
      <h1 className={`${this.state.endAnim ? 'top' : ''} `}>{this.state.text}</h1>
      
    )
  }
}


export default IntroComponent