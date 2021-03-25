import "./App.css";
import { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import Nav from "./Nav";
import Display from "./Display";

function App() {
  const [background, setBackground] = useState("slide_two.jpg");

  const bgStyle = {
    backgroundImage: `url(${background})`,
  };

  return (
    <div className="App" style={bgStyle}>
      <div className="App-inner">
        <Nav setBackground={setBackground} />

        {data.pages.map((entry, idx) => {
          return (
            <Route
              path={`/${entry.slug}`}
              render={(props) => <Display key={idx} {...props} entry={entry} />}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
