import axios from 'axios';

const baseURL = axios.create({
  baseURL: 'http://192.168.0.4:5000',
});

/* 프로필 */
export const reqProfile = async (accessToken) => {
  try {
    const { data } = await baseURL.get('/user/profile', {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    });

    return data;
  } catch (error) {
    return console.log(error);
  }
};
