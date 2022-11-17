import { getSessionStorage, setSessionStorage } from '@/utils/token';
import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({ baseURL: '/api' });

export const login = async (email: string, password: string) => {
  try {
    const { data } = await instance.post('/login', { email, password });
    setSessionStorage('token', data.accessToken);
    setSessionStorage('userEmail', data.user.email);
    return data.user;
  } catch (err) {
    console.log('error : ', err);
  }
};

// TODO 추후 분리 예정
export const getAccountList = async (params?: object) => {
  const token = getSessionStorage('token');

  try {
    const res = await instance.get('/accounts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    });
    return res;
  } catch (err) {
    console.log('error : ', err);
  }
};

export const getAccountFilter = async (params: object) => {
  const token = getSessionStorage('token');
  try {
    const { data } = await instance.get('/accounts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: params,
    });
    return data;
  } catch (err) {
    console.log('error : ', err);
  }
};

export const getSearchData = async (keyword: string) => {
  const token = getSessionStorage('token');
  try {
    const { data } = await instance.get('/accounts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        name_like: keyword,
      },
    });
    return data;
  } catch (err) {
    console.log('error : ', err);
  }
};

export const editAccountData = async (id: number, editData: object) => {
  const token = getSessionStorage('token');
  try {
    const { data } = await instance.put(`/accounts/${id}`, editData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    console.log('error : ', err);
  }
};

// TODO 추후 분리 예정
export const getUserList = async () => {
  const token = getSessionStorage('token');

  try {
    const { data } = await instance.get('/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    console.log('error : ', err);
  }
};

export const getAccountDetail = async (params: object) => {
  const token = getSessionStorage('token');

  try {
    const { data } = await instance.get('/accounts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    });
    return data;
  } catch (err) {
    console.log('error : ', err);
  }
};
