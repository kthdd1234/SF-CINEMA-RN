import axios from 'axios';

const baseURL = axios.create({
  baseURL: 'http://192.168.0.4:5000',
});

/* 키워드 검색 */
export const search = async (keyword: string) => {
  try {
    const { data } = await baseURL.get('/search', {
      params: {
        keyword: keyword,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
