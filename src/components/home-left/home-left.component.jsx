import React from "react";
import Header from "../header/header.component";
import "./home-left.styles.scss";
import pdf from "../../assets/resume.pdf";
const HomeLeft = ({ beginAnimation }) => {
  return (
    <div className="home-left">
      <Header beginAnimate={beginAnimation} />

      <div className="left-container">
        <h1 className={`${beginAnimation ? "active" : ""} title`}>
          Hi! I'm David
        </h1>
        <div className={`${beginAnimation ? "active" : ""} about`}>
          I've been a Web Developer for 5 years now and leverage my knowledge of
          JavaScript, HTML and CSS in front-end frameworks such as React and its
          relevant libraries (Redux, GraphQL etc...). For back end work I
          primarily use Node.js with Express along with databases such as
          PostgreSQL over HTTP or Firebase.
          <br />
          <br />
          In my free time there's a high chance you'll find me either climbing
          outdoors or rolling nat 20's in my D&D campaign.
          <br />
          <br />
          Check out my{" "}
          <a
            className="res hover-underline-animation"
            href={pdf}
            target="_blank"
            rel="noreferrer"
          >
            resume
          </a>{" "}
          for an in-depth overview of my skills!
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
