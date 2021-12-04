import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectEpisodesList } from "../../ducks/episodes/selectors";
import { getEpisodesRequest } from "../../ducks/episodes/actions";
import SearchComponent from "../SearchComponent/SearchComponent";
import { normalize } from "../../helpers/normalize";

const SearchLayoutComponent = () => {
    const episodesInfo = useSelector(selectEpisodesList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEpisodesRequest());
    }, [dispatch]);
    
    return (<SearchComponent episodes={normalize(episodesInfo.results)} />)
};

export default SearchLayoutComponent;