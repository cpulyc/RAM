import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectEpisodesList } from "../../ducks/episodes/selectors";
import { getEpisodesRequest } from "../../ducks/episodes/actions";
import SearchComponent from "../SearchComponent/SearchComponent";

// const mockData = {
//     "info": {
//         "count": 51,
//         "pages": 3,
//         "next": "https://rickandmortyapi.com/api/episode?page=2",
//         "prev": null
//         },
//         "results": [
//         {
//         "id": 1,
//         "name": "Pilot",
//         "air_date": "December 2, 2013",
//         "episode": "S01E01",
//         "characters": [
//         "https://rickandmortyapi.com/api/character/1",
//         "https://rickandmortyapi.com/api/character/2",
//         "https://rickandmortyapi.com/api/character/35",
//         "https://rickandmortyapi.com/api/character/38",
//         "https://rickandmortyapi.com/api/character/62",
//         "https://rickandmortyapi.com/api/character/92",
//         "https://rickandmortyapi.com/api/character/127",
//         "https://rickandmortyapi.com/api/character/144",
//         "https://rickandmortyapi.com/api/character/158",
//         "https://rickandmortyapi.com/api/character/175",
//         "https://rickandmortyapi.com/api/character/179",
//         "https://rickandmortyapi.com/api/character/181",
//         "https://rickandmortyapi.com/api/character/239",
//         "https://rickandmortyapi.com/api/character/249",
//         "https://rickandmortyapi.com/api/character/271",
//         "https://rickandmortyapi.com/api/character/338",
//         "https://rickandmortyapi.com/api/character/394",
//         "https://rickandmortyapi.com/api/character/395",
//         "https://rickandmortyapi.com/api/character/435"
//         ],
//         "url": "https://rickandmortyapi.com/api/episode/1",
//         "created": "2017-11-10T12:56:33.798Z"
//         },
//         {
//         "id": 2,
//         "name": "Lawnmower Dog",
//         "air_date": "December 9, 2013",
//         "episode": "S01E02",
//         "characters": [
//         "https://rickandmortyapi.com/api/character/1",
//         "https://rickandmortyapi.com/api/character/2",
//         "https://rickandmortyapi.com/api/character/38",
//         "https://rickandmortyapi.com/api/character/46",
//         "https://rickandmortyapi.com/api/character/63",
//         "https://rickandmortyapi.com/api/character/80",
//         "https://rickandmortyapi.com/api/character/175",
//         "https://rickandmortyapi.com/api/character/221",
//         "https://rickandmortyapi.com/api/character/239",
//         "https://rickandmortyapi.com/api/character/246",
//         "https://rickandmortyapi.com/api/character/304",
//         "https://rickandmortyapi.com/api/character/305",
//         "https://rickandmortyapi.com/api/character/306",
//         "https://rickandmortyapi.com/api/character/329",
//         "https://rickandmortyapi.com/api/character/338",
//         "https://rickandmortyapi.com/api/character/396",
//         "https://rickandmortyapi.com/api/character/397",
//         "https://rickandmortyapi.com/api/character/398",
//         "https://rickandmortyapi.com/api/character/405"
//         ],
//         "url": "https://rickandmortyapi.com/api/episode/2",
//         "created": "2017-11-10T12:56:33.916Z"
//         },
//         ]};



const SearchLayoutComponent = () => {
    const episodesInfo = useSelector(selectEpisodesList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEpisodesRequest());
    }, [dispatch]);    
            
    return (<SearchComponent episodes={episodesInfo.results} />)
};

export default SearchLayoutComponent;