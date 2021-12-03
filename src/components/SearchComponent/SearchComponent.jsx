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
        const searchEpisodes = episodes.filter((episodesItem) =>
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
            placeholder="Введите поисковый запрос"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
        <p className="paragraph">Список серий:</p>
        {searchResults.length !== 0 ? (
          <ul className="episodesView">
            {searchResults.map((episodesItem) => (
              <li key={episodesItem.id}>
                    <ListComponent {...episodesItem} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="parEmptySearch">Ничего не найдено</p>
        )}
      </div>
    )
}

export default SearchComponent;