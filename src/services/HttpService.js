import Axios from "axios";
import http from "http";

const httpAgent = new http.Agent({ keepAlive: true });
const axios = Axios.create({ withCredentials: true, timeout: 1000 * 180 });
const BASE_URL = "";

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
      const res = await axios(
        {
          url: `${BASE_URL}${endpoint}`,
          data,
          method,
          headers: header
            ? {
                [header.headerName]: header.headerValue,
              }
            : "",
        },
        { httpAgent }
      );
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
