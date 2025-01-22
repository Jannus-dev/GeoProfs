import axios from "axios";

const baseApiUrl = import.meta.env.VITE_APP_API_URL;

const createApiUrl = (endpoint = "") => {
  return `${baseApiUrl}/${endpoint}`;
};

export const useApiConnector = () => {
  /**
   * Makes a GET request to the API.
   * @param {string} endpoint - The specific endpoint to hit.
   * @returns {Promise<any>} Axios response data.
   */
  const get = async (endpoint: string) => {
    const url = createApiUrl(endpoint);
    return axios.get(url);
  };

  /**
   * Makes a POST request to the API.
   * @param {string} endpoint - The specific endpoint to hit.
   * @param {object} data - Data to send in the request body.
   * @returns {Promise<any>} Axios response data.
   */
  const post = async (endpoint: string, data: object) => {
    const url = createApiUrl(endpoint);
    return axios.post(url, data);
  };

  /**
   * Makes a PATCH request to the API.
   * @param {string} endpoint - The specific endpoint to hit.
   * @param {object} data - Data to send in the request body.
   * @returns {Promise<any>} Axios response data.
   */
  const patch = async (endpoint: string, data: object) => {
    const url = createApiUrl(endpoint);
    return axios.patch(url, data);
  };

  /**
   * Makes a DELETE request to the API.
   * @param {string} endpoint - The specific endpoint to hit.
   * @returns {Promise<any>} Axios response data.
   */
  const deleteRequest = async (endpoint: string) => {
    const url = createApiUrl(endpoint);
    return axios.delete(url);
  };

  return { get, post, patch, deleteRequest };
};
