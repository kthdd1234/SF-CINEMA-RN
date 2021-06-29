import axios from 'axios';

const baseURL = axios.create({
  baseURL: 'http://192.168.0.4:5000',
});

/* 로그인 */
export const requestLogin = async (userId, password) => {
  try {
    const { data } = await baseURL.post('/user/login', {
      loginID: userId,
      password: password,
    });
    return data;
  } catch (error) {
    return console.log(error);
  }
};

/* 회원가입 */
export const requestSignUp = async (userId, password) => {
  try {
    const { data } = await baseURL.post('/user/signup', {
      loginID: userId,
      password: password,
      provider: 'SF CINEMA',
      username: null,
      profileImg: null,
    });
    return data;
  } catch (error) {
    return console.log(error);
  }
};

/* 프로필 */
export const userProfile = async (accessToken) => {
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

/* 개봉 예정작 */
export const upcomingMovies = async () => {
  try {
    const { data } = await baseURL.get('/recommendation/upcoming-movies');
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

/* 최신 개봉작 */
export const latestMovies = async () => {
  try {
    const { data } = await baseURL.get('/recommendation/latest-movies');
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

/* 추천 영화 */
export const recommendMovies = async (count) => {
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

/* 평점이 높은 영화 */
export const highlyRatedMovies = async (count) => {
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

/* 장르(특징) */
export const genres = async (genre, count) => {
  try {
    const { data } = await baseURL.get('/genre', {
      params: {
        genre: genre,
        count: count,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

/* SF 명작 */
export const sfMasterpiece = async (count) => {
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

/* 키워드 검색 */
export const search = async (keyword) => {
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

/* 현재 영화 */
export const contents = async (movieId) => {
  try {
    const { data } = await baseURL.get('/contents', {
      params: {
        movieId: movieId,
      },
    });
    return data;
  } catch (error) {
    return console.log(error);
  }
};

/* 시리즈 */
export const movieSeries = async (series) => {
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

/* 저장하기(completed) */
export const saveCompleted = async (userId, movieId) => {
  try {
    const { data } = await baseURL.post('/save/completed', {
      userId: userId,
      movieId: movieId,
    });

    return data;
  } catch (error) {
    return console.log(error);
  }
};

/* 저장하기(cancel) */
export const saveCancel = async (userId, movieId) => {
  try {
    const { data } = await baseURL.delete('/save/cancel', {
      data: {
        userId: userId,
        movieId: movieId,
      },
    });

    return data;
  } catch (error) {
    return console.log(error);
  }
};

/* 재밌어요(completed) */
export const likeCompleted = async (userId, movieId) => {
  try {
    const { data } = await baseURL.post('/like/completed', {
      userId: userId,
      movieId: movieId,
    });

    return data;
  } catch (error) {
    return console.log(error);
  }
};

/* 재밌어요(cancel) */
export const likeCancel = async (userId, movieId) => {
  try {
    const { data } = await baseURL.delete('/like/cancel', {
      data: {
        userId: userId,
        movieId: movieId,
      },
    });

    return data;
  } catch (error) {
    return console.log(error);
  }
};
