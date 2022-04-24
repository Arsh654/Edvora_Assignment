import React, { useContext } from "react";
import Card from "../components/Card";
import { DataContext } from "../../App";
import moment from "moment";

function PastRides() {
  const data = useContext(DataContext);
  const currDate = moment().format("MM/DD/YYYY h:mm A");

  const newData = data.filter((items) => {
    return currDate > items.date;
  });

  console.log(newData, "------------>");
  return (
    <>
      {newData.length ? (
        <>
          {newData.map((item) => {
            return <Card item={item} />;
          })}
        </>
      ) : (
        <h1 style={{ color: "#fff", marginLeft: "15px" }}>no upcoming ride</h1>
      )}
    </>
  );
}

export default PastRides;
