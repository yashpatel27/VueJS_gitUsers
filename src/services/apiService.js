import axio from "axios";
import { apiBaseUrl, requestHeader } from "@/constants/constants";
import NProgress from "nprogress";

const apiClient = axio.create({
  baseURL: apiBaseUrl,
  withCredentials: false, // This is the default
  headers: requestHeader
});
apiClient.interceptors.request.use(config => {
  NProgress.start();
  return config;
});
apiClient.interceptors.response.use(response => {
  NProgress.done();
  return response;
});
export default {
  getGUser(name) {
    let URI = `/users/${name}`
    return apiClient.get(URI);
  },
  getGFollowers(name) {
    let URI = `/users/${name}/followers`
    return apiClient.get(URI);
  },
  getRepos(name) {
    let URI = `/users/${name}/repos`
    return apiClient.get(URI);
  }
};

