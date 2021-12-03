import axios from "axios";
const request = axios.create({
  baseURL: "https://rickandmortyapi.com/api" || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json"
  }
});

/**
 * Request interceptor for setting JWT to request header
 */
request.interceptors.response.use(responseMapper);

/**
 * Request interceptor for setting JWT to request header
 */
request.interceptors.request.use(setJWTHeader);

/**
 * Response interceptor for setting JWT to LocalStorage
 */
request.interceptors.response.use(setJWTInLocalStorage);

/**
 * Set jwt token in the authorization header under the 'Authorization' key
 */

function setJWTHeader(config) {
  const newConfig = config;

  newConfig.headers.common["Authorization"] = window.localStorage.getItem(
    "key"
  );
  return newConfig;
}

/**
 * Save JWT to the LocalStorage
 */
function setJWTInLocalStorage(response) {
  if (response?.token) {
    window.localStorage.setItem("key", response.token);
  }
  return response;
}

function responseMapper(response) {
  // console.log("responseMapper", response.status, response);
  return response.data && !response.headers["content-disposition"]
    ? response.data
    : response;
}

export default request;