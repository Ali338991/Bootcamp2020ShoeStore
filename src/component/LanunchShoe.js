import React from "react";
import { useParams } from "react-router";
import { shoes } from "../util/Data";

export default function LanunchShoe() {
  const { slug } = useParams();
  const shoe = shoes[slug];

  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  const { name, img } = shoe;

  return (
    <div className="shoeContainer">
      <h2>{name}</h2>

      <img src={img} alt={name} className="shoeImage" />
    </div>
  );
}
