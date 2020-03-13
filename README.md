# My Book Management Webpage

### Pages

1. Login
2. List
3. Add
4. Detail
5. Edit

### Thing to note

- Javascript
- Server - client communication API
  - Login - POST
  - access my info - GET
  - get book list - GET
  - get book info - GET
  - add book - POST
  - revise book - PATCH
  - delete book - DELETE
- bootstrap [link](https://getbootstrap.com/docs/4.4/examples/album/)

### Communicate with server

- Axios [link](https://github.com/axios/axios)
  - Promise based HTTP client for the browser and node.js

## Process

### index.js

- DOM 요소들이 다 로딩 된 후 main 함수가 실행된다. [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event)

  ```javascript
  document.addEventListener("DOMContentLoaded", main);
  ```

- async function main()

  - DOM 버튼들에 event 연결하기
  - 로그인 여부 확인하기 위해 토큰 체크 [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) [location](https://developer.mozilla.org/en-US/docs/Web/API/Location)
  - 서버와 통신하여 내 정보 받아오기, 문제 생기면 로그아웃
  - 내 책 목록 서버에서 받기
  - 받아온 책 그리기 [Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

### login.js

- DOM 요소들이 다 로딩 된 후 main 함수가 실행된다.
- async function main()
  - DOM 버튼들에 event 연결하기
  - 토큰 체크하기

### add.js

- DOM 요소들이 다 로딩 된 후 main 함수가 실행된다.
- async function main()
  - DOM 버튼들에 event 연결하기
  - 토큰 체크하기
  - 토큰 이용하여 서버에서 내 정보 받아오기

### book.js

- DOM 요소들이 다 로딩 된 후 main 함수가 실행된다.
- async function main()
  - DOM 버튼들에 event 연결하기
  - 브라우저에서 id 가져오기
  - 토큰 체크하기
  - 토큰으로 서버에서 내 정보 가져오기
  - 서버에서 책 받아오기

### edit.js

- DOM 요소들이 다 로딩 된 후 main 함수가 실행된다.
- async function main()
  - 브라우저에서 id 가져오기
  - 토큰 체크하기
  - 토큰 이용해서 서버에서 나의 정보 받아오기
  - 책을 서버에서 받아오기
  - 받아온 책 그리기
