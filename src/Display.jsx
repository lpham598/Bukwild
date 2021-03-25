import React from "react";
import "./Display.css";

export default function Display(props) {
  const { blocks } = props.entry;
  const data = blocks[0];
  const { headline, subhead, cta } = data;
  return (
    <div className="Display">
      <h1 className="Headline">{headline}</h1>
      <h2 className="Subhead">{subhead}</h2>

      <div className="Bg">
        <h3 className="cta">{cta}</h3>
        <h4 className="LETS-TALK">
          LET'S TALK.
          <span className="arrow"> ⮕ </span>
        </h4>
      </div>
    </div>
  );
}
