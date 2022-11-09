/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Food({ el }) {
  return (
    <div>
      <h1>{el.id}</h1>

      <h1>{el.name}</h1>
      <img src={el.picture} />
      <p> {el.steps}</p>
    </div>
  );
}
