import React from "react";
import "./style.css";

const ListComponent = ({ name, air_date, id, episode, url }) => {
  return (
    <>
      <td className="episodesCell">{+episode.slice(1, 3)}</td>
      <td className="episodesCell">{+episode.slice(4, 6)}</td>
      <td className="episodesCell2">{name}</td>
      <td className="episodesCell2">{air_date}</td>
    </>
  )
};
  
  export default ListComponent;