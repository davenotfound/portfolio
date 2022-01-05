import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home/homepage.component";
import ContactPage from "./pages/contact/contactpage.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beginAnimate: false,
    };
  }

  // animate = () => {
  //   setTimeout(async () => {
  //     await this.setState({ beginAnimate: true });
  //   }, 2000);
  // };

  // componentDidMount() {
  //   this.animate();
  // }

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
