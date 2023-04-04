# 프리온보딩 프론트엔드 인턴십 사전 과제

Wanted에서 진행하는 프리온보딩 프론트엔드 인턴십 사전 과제

진행 기간: 2023-03-31 ~

## 기능 설명

JWT 방식을 이용한 회원가입과 로그인  
로그인 한 이용자는 투두 리스트를 이용 가능

## 실행 방법

레포지토리를 clone한 뒤, `npm install`, `npm start`  
[영상]  
[배포링크]: URL

### 라이브러리

react  
react-router-dom  
axios  
sass

npx create-react-app
npm install react-router-dom@6
npm i axios
npm i sass

### 구현기능

- /signup : 회원가입과 로그인  
  [x] 이메일 유효성 검사: @ 포함  
  [x] 비밀번호 유효성 검사: 8자 이상  
  [x] 유효성 검사에 통과하지 못할 경우 버튼 disabled  
  [x] 회원가입 완료 시 /signin 경로로 이동  
  [x] 로그인 완료 시 /todo 경로로 이동  
  [x] 로그인 인증 방식: 로컬스토리지에 JWT 저장  
  [x] 로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지 접속 시 /todo 경로로 리다이렉트  
  [x] 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속 시 /signin 경로로 리다이렉트

- /todo : 투두 리스트  
  [x] 추가 버튼을 눌러 새로운 투두 리스트 추가  
  [x] 투두 리스트 내용 수정 시 input창에 입력된 형태로 변경  
  [x] 수정 취소 기능  
  [ ] 수정 버튼을 눌러 투두 리스트 수정  
  [ ] 체크박스 체크를 통한 투두 리스트 완료 여부  
  [ ] 삭제 버튼을 눌러 투두 리스트 삭제  
  [ ] 새로고침을 하여도 투두 리스트 유지

### API

API 레퍼런스: https://github.com/walking-sunset/selection-task#api
