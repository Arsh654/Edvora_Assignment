import React, { useContext } from "react";
import Card from "../components/Card";
import { DataContext } from "../../App";
function NearestRides() {
  const data = useContext(DataContext);
  return (
    <div>
      {data.map((item, i) => {
        return <Card item={item} key={i} />;
      })}
    </div>
  );
}

export default NearestRides;
