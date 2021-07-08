import axios from 'axios';

const baseURL = axios.create({
  baseURL: 'http://192.168.0.4:5000',
});

/* 장르(특징) */
const genres = async (genre: string) => {
  try {
    const { data } = await baseURL.get('/genre', {
      params: {
        genre: genre,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

/* 시리즈 */
const movieSeries = async (series: string) => {
  try {
    const { data } = await baseURL.get('/series', {
      params: {
        title: series,
      },
    });

    return data;
  } catch (error) {
    return console.log(error);
  }
};

export { genres, movieSeries };
