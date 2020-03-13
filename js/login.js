function getToken() {
  return localStorage.getItem("token");
}

async function login(event) {
  // submit 관련 로직이 추가적으로 실행되지 않게 한다.
  event.preventDefault();
  // submit 이벤트가 상위로 전달되는 것을 방지한다.
  event.stopPropagation();

  const emailElement = document.querySelector("#email");
  const passwordElement = document.querySelector("#password");

  const email = emailElement.value;
  const password = passwordElement.value;

  console.log(email, password);

  try {
    const res = await axios.post("https://api.marktube.tv/v1/me", {
      email,
      password
    });
    const { token } = res.data; // const token = res.data.token;
    if (token === undefined) {
      return;
    }
    localStorage.setItem("token", token);
    location = "/"; // location.assign('/');
  } catch (error) {
    const data = error.response.data;
    if (data) {
      const state = data.error;
      if (state === "USER_NOT_EXIST") {
        alert("사용자가 존재하지 않습니다.");
      } else if (state === "PASSWORD_NOT_MATCH") {
        alert("비밀번호가 틀렸습니다.");
      }
    }
  }
}

function bindLoginButton() {
  const form = document.querySelector("#form-login");
  // login이 "submit"을 인자로 받아온다.
  form.addEventListener("submit", login);
}

async function main() {
  // 버튼에 이벤트 연결
  bindLoginButton();

  // 토큰 체크
  const token = getToken();
  if (token !== null) {
    // page를 index page로 옮기기
    location.assign("/");
    return;
  }
}

document.addEventListener("DOMContentLoaded", main);

// test@marktube.tv
// 1234
