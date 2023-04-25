import axios from "axios";
export const axiosCall = async ({ url, method, data }) => {
  return await axios({
    url,
    method,
    data,
  });
};
