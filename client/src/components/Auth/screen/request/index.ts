import axios from 'axios';

const baseURL = axios.create({
  baseURL: 'http://192.168.0.4:5000',
});

/* 로그인 */
const reqLogin = async (userId: string, password: string) => {
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
const reqSignUp = async (userId: string, password: string) => {
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

export { reqLogin, reqSignUp };
