import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
// import store from '../../store/store';

const prodUrl = "https://pokeapi.co/api/v2";
const devUrl = "http://localhost:5000/api";
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_NODE_ENV === "dev" ? devUrl : prodUrl,
});

let interceptorRef: null | number = null;

const instanceCreator = ($axios: AxiosInstance) => ({
  saveHeader({ key, value }: { key: string; value: string }) {
    $axios.defaults.headers.common[key] = value;
  },
  deleteHeader(key: string) {
    delete $axios.defaults.headers.common[key];
  },
  get(url: string, params?: Object) {
    return $axios.get(url, { params });
  },
  post(resource: string, data: Object) {
    return $axios.post(resource, data);
  },
  put(resource: string, data: Object) {
    return $axios.put(resource, data);
  },
  delete(resource: string) {
    return $axios.delete(resource);
  },
  deleteWithBody(resource: string, data: Object) {
    return $axios.delete(resource, { data: data });
  },
  customRequest(config: AxiosRequestConfig) {
    return $axios(config);
  },
  successHandler(response: AxiosResponse) {
    return response;
  },
  errorHandler(error: AxiosError) {
    // console.log(error.response);
    const { response } = error;
    if (response?.status === 403) {
      // localStorage.clear();
      // window.location.href = "/auth/login";
      console.log(response);
      // return;
    }
    return Promise.reject(error);
    // const {data} = response
  },
  interceptorRef: interceptorRef,
  mountResponseInterceptor() {
    this.interceptorRef = $axios.interceptors.response.use(
      this.successHandler,
      this.errorHandler
    );
  },
  ejectResponseInterceptor() {
    this.interceptorRef &&
      $axios.interceptors.response.eject(this.interceptorRef);
  },
});

export const HTTPClient = instanceCreator(axiosInstance);
HTTPClient.mountResponseInterceptor();
