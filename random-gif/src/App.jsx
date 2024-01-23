import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="wrapper">
      <div className="head"><p className="headi">Random Gifs</p></div>
      <div className="random"><Random/></div>
      <div className="tag"><Tag/></div>
    </div>
  );
}
