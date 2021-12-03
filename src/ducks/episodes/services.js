import request from "../../helpers/request";
import { apiRoutes } from "../../constants/apiRoutes";

export const getEpisodes = (parameters) => {
  return request.get(apiRoutes.EPISODES + parameters);
};