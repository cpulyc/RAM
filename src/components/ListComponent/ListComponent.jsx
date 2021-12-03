import React from "react";

const ListComponent = ({ name, air_date, id, episode }) => (
    <div>
      <span>{episode}</span>
      <span>|</span>
      <span>{id}</span>
      <span>|</span>
      <span>{name}</span>
      <span>|</span>
      <span>{air_date}</span>
    </div>
  );
  
  export default ListComponent;