import axios from 'axios';

const baseURL = axios.create({
  baseURL: 'http://192.168.0.4:5000',
});

/* 평점이 높은 영화 */
const highlyRatedMovies = async (count: number) => {
  try {
    const { data } = await baseURL.get('/recommendation/highly-rated-movies', {
      params: {
        count: count,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

/* 추천 영화 */
const recommendMovies = async (count: number) => {
  try {
    const { data } = await baseURL.get('/recommendation', {
      params: {
        count: count,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

/* 개봉 예정작 */
const upcomingMovies = async (count: number) => {
  try {
    const { data } = await baseURL.get('/recommendation/upcoming-movies');
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

/* 최신 개봉작 */
const latestMovies = async (count: number) => {
  try {
    const { data } = await baseURL.get('/recommendation/latest-movies');
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

/* SF 명작 */
const sfMasterpiece = async (count: number) => {
  try {
    const { data } = await baseURL.get('/recommendation/sf-masterpiece', {
      params: {
        count: count,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export {
  recommendMovies,
  highlyRatedMovies,
  upcomingMovies,
  latestMovies,
  sfMasterpiece,
};
