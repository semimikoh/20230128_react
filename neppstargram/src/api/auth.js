import axios from "axios";

export const authAxios = axios.create({
  baseURL: "http://101.101.218.43/users",
});

// 개발자 도구 -> localStorage -> 토큰
const token = localStorage.getItem("token");

if (token) {
  authAxios.defaults.headers.Authorization = `Bearer ${token}`;
}

export const signUp = async (form) => {
  try {
    const { data } = await authAxios.post("", form);
    return data;
  } catch (e) {
    console.log(e);
    alert("입력 양식을 확인해 주세요.");
  }
};

export const login = async (form) => {
  try {
    const { data } = await authAxios.post("/signin", form);

    // token = data.token
    //로그인 성공시 header에 토큰값 저장
    authAxios.defaults.headers.Authorization = `Bearer ${data.token}`;
    localStorage.setItem("token", data.token);
    return data;
  } catch (e) {
    console.log(e);
    alert("이메일 혹은 비밀번호를 확인해 주세요.");
  }
};

export const getCurrentUser = async () => {
  try {
    const { data } = await authAxios.get("/current");
    // const { data } = await authAxios.get("/current", {
    //   headers: {
    //     Authorization:
    //       "Bearer " +
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlbWlAc2VtaS5zZW1pIiwic3ViIjo3MywiaWF0IjoxNjc3MzkzNjgwLCJleHAiOjE2Nzc0ODAwODB9.KX4xe5HhyePdHeJ6LP3RFJa49quUv2jKeOqwl5QvKE4",
    //   },
    // });
    console.log(data);
  } catch (e) {}
};

// signup에서 useInput으로 받아 오는 값이 같기 때문에 form으로 바꿔줌

// export const signUp = (name, email, password) => {
//   const res = authAxios.post("", {
//     name,
//     email,
//     password,
//   });

//   return res;
// };
