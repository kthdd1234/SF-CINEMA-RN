import axios from 'axios';

const baseURL = axios.create({
  baseURL: 'http://192.168.0.4:5000',
});

/* 현재 영화 */
const contents = async (movieId) => {
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

/* 저장하기(completed) */
const saveCompleted = async (userId, movieId) => {
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
const saveCancel = async (userId, movieId) => {
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
const likeCompleted = async (userId, movieId) => {
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
const likeCancel = async (userId, movieId) => {
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

export { contents, saveCompleted, saveCancel, likeCompleted, likeCancel };
