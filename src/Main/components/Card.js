import React from "react";
import Map1 from "../assets/Map1.png";
import moment from "moment";

import "../Styles/CardStyles.css";

function Card({ item }) {
  const {
    id,
    origin_station_code,
    city,
    date,
    destination_station_code,
    map_url,
    state,
    station_path,
  } = item;
  return (
    <div className="CardContainer">
      <img src={map_url} className="cardImage" />
      <div className="CardTexts">
        <div>
          <p className="text">Ride Id : {id}</p>
          <p className="text">Origin Station : {origin_station_code}</p>
          <p className="text">station_path : {station_path}</p>
          <p className="text">Date : {date}</p>
          <p className="text">Distance : {state}</p>
        </div>
        <div className="StateContainer">
          <button className="cityP">{city}</button>
          <button className="cityP">{state}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
