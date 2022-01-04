import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import ImageOverlay from "./components/home-img-overlay/img-overlay.component";
import HomeLeft from "./components/home-left/home-left.component";
import Socials from "./components/socials/socials.component";
import HomePage from "./pages/home/homepage.component";

class App extends React.Component {
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
      <div>
        {/* <HomeLeft beginAnimation={this.state.beginAnimate} />
        <ImageOverlay beginAnimation={this.state.beginAnimate} />
        <Socials beginAnimation={this.state.beginAnimate} /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
