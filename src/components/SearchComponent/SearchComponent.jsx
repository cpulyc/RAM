import React, { useState, useEffect } from "react";
import ListComponent from "../ListComponent/ListComponent";
import "./style.css";

const SearchComponent = ({ episodes }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
      setSearchTerm(e.target.value);
    }

    useEffect(() => {
        const searchEpisodes = episodes.rows.filter((episodesItem) =>
          episodesItem.name.toLowerCase().includes(searchTerm.toLowerCase())
        );    
        setSearchResults(searchEpisodes);
      }, [searchTerm, episodes]);

    return (
      <div className="searchContainer">
        <form className="searchForm">
          <input
            className="searchInput"
            type="text"
            placeholder="Введите название серии"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
        <p className="paragraph">Список серий:</p>
        {searchResults.length !== 0 ? (
          <table className="episodesTable">
            <tr className="episodesHeader">
              <td className="episodesCell">
                Сезон
              </td>
              <td  className="episodesCell">
                Серия
              </td>
              <td  className="episodesCell2">
                Название серии
              </td>
              <td  className="episodesCell2">
                Дата выхода
              </td>
            </tr>
            {searchResults.map((episodesItem) => (
              <tr key={episodesItem.id} className="episodesRow">
                <ListComponent {...episodesItem} />
              </tr>
            ))}
          </table>
        ) : (
            <p className="parEmptySearch">Ничего не найдено</p>
        )}
      </div>
    )
}

export default SearchComponent;