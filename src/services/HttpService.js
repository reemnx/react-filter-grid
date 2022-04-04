import Axios from "axios";

const axios = Axios.create({ withCredentials: true, timeout: 1000 * 180 });
const BASE_URL = "https://jsonplaceholder.typicode.com";

class HttpService {
  get = (endpoint, data = null, header) => {
    return this.ajax(endpoint, data, header, "GET");
  };
  post = (endpoint, data = null, header) => {
    return this.ajax(endpoint, data, header, "POST");
  };
  put = (endpoint, data = null, header) => {
    return this.ajax(endpoint, data, header, "PUT");
  };
  delete = (endpoint, data = null, header) => {
    return this.ajax(endpoint, data, header, "DELETE");
  };
  ajax = async (endpoint, data, header, method) => {
    try {
      const res = await axios({
        url: `${BASE_URL}${endpoint}`,
        data,
        method,
        headers: header
          ? {
              [header.headerName]: header.headerValue,
            }
          : "",
      });
      return res.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
}
const HTTP = new HttpService();
Object.freeze(HTTP);
export default HTTP;
