// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

console.clear();
const [honda, tesla] = cars;

/*  Using EXTENDEDED destructuring */
//const {topSpeed:hondaTopSpeed, zeroToSixty:hondaZeroToSixty} = honda.speedStats;
const {
  speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty }
} = honda;
//const [hondaTopColour, hondaSecondColour] = honda.coloursByPopularity;
const {
  coloursByPopularity: [hondaTopColour]
} = honda;

/* Using dot walking */

const {
  topSpeed: teslaTopSpeed,
  zeroToSixty: teslaZeroToSixty
} = tesla.speedStats;
const [teslaTopColour, teslaSecondColour] = tesla.coloursByPopularity;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th> Color </th>
      <th> 0-60 </th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
      <td> {teslaZeroToSixty}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
      <td> {hondaZeroToSixty}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
