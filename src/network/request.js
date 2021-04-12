import axios from 'axios';

export function request(config) {
  // 在实例创建的时候 就发送请求 axios.create
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  });
    // 请求拦截
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
  });
  // 响应拦截
  instance.interceptors.request.use(res => {
    return res;
  }, err => {
    console.log(err);
  });
  // 发送真正的网络请求
  return instance(config);
}

