import axios from "axios";
import { toast } from "react-toastify";

const HOSTED_API_URL = "https://localhost:44302/api/v1/";
//const HOSTED_API_URL = "http://ec2-54-221-177-27.compute-1.amazonaws.com/identitynomina/api/v1/";
//const HOSTED_API_URL = "https://8ec4-181-51-32-203.ngrok.io/api/v1/";
const CURRENT_API_URL = HOSTED_API_URL;

const instance = axios.create({
  baseURL: CURRENT_API_URL,
});
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.message == "Network Error") {
      toast.error("Network error");
      return;
    }
    if (error?.response?.status === 401) {
      toast.error("Session expired");
      window.location = "/login";
      return;
    }

    return Promise.reject(error);
  }
);

export { CURRENT_API_URL };
export default instance;
