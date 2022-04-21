import axios, { AxiosResponse } from "axios";
import { API_ROOT } from "./agent";

interface IUser {
  image: string;
  username: string;
  email: string;
  password: string;
}

export const getTags = async (): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(`${API_ROOT}/tags`);
  return response.data;
};

export const login = async (email: string, password: string): Promise<any> => {
  const response: AxiosResponse<IUser> = await axios.post(
    `${API_ROOT}/users/login`,
    { user: { email, password } }
  );
  return response.data;
};

export const signup = async (
  username: string,
  email: string,
  password: string
): Promise<any> => {  
  const response: AxiosResponse<IUser> = await axios.post(
    `${API_ROOT}/users`,
    { user: { username, email, password } }
  );
  return response.data;
};

export const auth = async (): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(`${API_ROOT}/user`);
  return response.data;
};

export const updateUser = async (user: IUser): Promise<any> => {  
  const response: AxiosResponse<IUser> = await axios.put(`${API_ROOT}/user`, { user });
  return response.data;
};

export const setTokenAxios = (_token: string) => {
  axios.defaults.headers.common["Authorization"] = `Token ${_token}`;
};
