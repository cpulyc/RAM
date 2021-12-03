import React, { useState, useEffect } from "react";
import ListComponent from "../ListComponent/ListComponent";

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
      <div className="searchForm">
        <input
          type="text"
          placeholder="Введите название эпизода"
          value={searchTerm}
          onChange={handleChange}
        />
        <p>Список эпизодов:</p>
        {searchResults.length !== 0 ? (
          <ul className="episodes">
            {searchResults.map((episodesItem) => (
              <li key={episodesItem.id}>
                    <ListComponent {...episodesItem} />
              </li>
            ))}
          </ul>
        ) : (
          <p>Список пуст</p>
        )}
      </div>
    )
}

export default SearchComponent;