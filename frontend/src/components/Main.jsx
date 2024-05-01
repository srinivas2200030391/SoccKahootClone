import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../App.css";

const Main = () => {
  const [gid, setGid] = useState("");

  return (
    <div className="container">
      <Helmet>
        <title>Enter Game PIN - SoccKahoot!</title>
      </Helmet>
      <h1 className="title">SoccKahoot</h1>
      <div className="box">
        <div className="input-container">
          <input
            type="text"
            placeholder="Game PIN"
            className="input"
            value={gid}
            onChange={(e) => {
              setGid(e.target.value);
            }}
          />
        </div>
        <button className="button" onClick={() => console.log(gid)}>
          Enter
        </button>
      </div>
    </div>
  );
};

export default Main;
