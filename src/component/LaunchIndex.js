import React from "react";
import { Link } from "react-router-dom";
import { shoes } from "../util/Data";

export default function LaunchIndex() {
  return (
    <div className="launchContainer">
      {Object.entries(shoes).map(([slug, { name, img }]) => (
        <div key={slug}>
          <Link to={`/launch/${slug}`}>
            <h2>{name}</h2>
            <img src={img} alt={name} />
          </Link>
        </div>
      ))}
    </div>
  );
}
