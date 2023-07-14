# The movie db api 
**https://www.themoviedb.org/**
영화 정보를 가지고 있는 API
- 해당 사이트에서 API KEY 불러오기

# Axois 

- Axios 란 ?
  브라우저, Node.js 를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
  ( 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 Ajax와 더불어 사용)
  fetch() 와 다르게 따로 설치를 해야 사용 할 수 있음 
  -> 현업에서는 Axois 를 더 많이 사용함
    더 많은 기능 제공
- **npm i axios --save**
- **axios.{get,post}(API주소)**
- Axios 를 인스턴스화 하는 이유 = 중복되는 부분을 계속 입력하지 않아도 되기 때문에
  1. Axios 생성할 폴더 파일 생성
  2. axios.js -> baseURL 과 API_KEY, 외의 옵션 등 기본 설정들을 인스턴스화
  3. request.js -> 상세 요청 값 인스턴스 화

# 전체 구조 
Navigation Bar
Banner
Category
Row
Row
Footer
-> src/components 파일에 생성

# Styled Components 
-> Styled Components 란 Css-in-js 라고 하는 JS 파일 안에서 CSS를 처리 할 수 있게 해주는 대표적인 라이브러리

style 들을 컴포넌트 화 시켜서 사용함
=> props 를 사용하여 조건부 스타일링을 적용 시킬 수 있음
=> Extending (상속) 도 사용 할 수 있음

- 설치
npm i styled-components --save ||
yarn add style-components 

## Naviagion '/components/Nav.js'

- 스크롤 이벤트 구현
  ( useState, useEffect, window.scrollY)
  => return ( removeEventListener ) 를 통해 이벤트 리스너를 제거해줌 
    = 컴포넌트를 사용하지 않을 때 이벤트가 쌓이지 않도록

## Banner '/components/Banner.js

- 페이지에 접속 했을 때 배너 이미지가 바뀌게끔 

## 동기와 비동기 (async & await)
  axios 로 불러온 데이터를 바로 콘솔에 찍어봤더니 Promise 객체가 전달 됨
  => 비동기 작업으로 실행 됐기 때문에 ( 요청을 한 후 res가 오기 전에 다른 작업을 함)
   이를 해결 하기 위해선 아직 res가 오지 않은 상태가 아닌 **결과값을 받은 이후**에 값을 처리 해 주면 됨

  1. 요청을 한 다음 .then() 메서드를 이용하는 방법
    .then() -> req 가 다 처리 된 후, 응답을 받았을 때 then 안의 코드들을 실행함
  2. Async , Await 

## 배너에 랜덤으로 영화 정보 나타내기
-> Math.floor() -> 소수점을 없애줌, 정수로 변환
-> Math.random() -> 0~1 사이의 수를 반환

  [Math.floor( Math.random() * res.data.results.length )].id 
  를 통해 처음으로 받아온 영화 리스트 중, 한 개의 영화 id 를 추출하여 사용

## Row.js 
-> js 로 슬라이더 구현
  document.getElementById(id).scrollLeft += window.innerWidth - 80 &&
  document.getELementById(id).scrollLeft -= window.innerWidth + 80
  => document.getElementById(id) -> 해당 요소 
  => scrollLeft -> 요소의 콘텐츠가 왼쪼 가장자리에서 스크롤되는 픽셀 수
  => innerWidth -> 뷰포트 전체의 너비값

## Modal 창 구현
-> 해당 영화를 클릭하면 모달창이 뜨는 기능 
  ModalOpen, MovieSelected 라는 state를 만들어, 영화를 클릭하게 되면
  ModalOpen 을 true 로 바꿔 Row.js return 부분에 조건부 렌더링을 하게 함
  MovieSelected 에는 클릭한 해당 영화의 정보들을 객체 데이터로 담아서 
  **MovieModal.js** 에 props 로 모두 전달
  
## React Router Dom
웹 앱 에서 동적 라우팅 구현 가능, 라우팅이 실행 중인 앱 외부의 구성에서 처리되는 기존 라우팅 아키텍쳐와 달리 React Router Dom 은 앱 및 플랫폼의 요구 사항에 따라 컴포넌트 기반 라우팅을 용이하게 함

? Router
라우터의 정의로는 컴퓨터 네트워크에서 데이터를 송수신 하는 장치라고 함

=> SPA 
리액트는 SPA 이기 떄문에 하나의 index.html 템플릿을 가지고 있음, 해당 템플릿에 자바스크립트를 이용하여 다른 컴포넌트들을 index.html 템플릿에 넣음으로 페이지를 변경함,
이를 렌더링하는 것에 도움을 주는 게 React Router Dom 라이브러리

web -> Our React App => index.js<->Router-> Component 1, 2, 3

### 설치
npm i react-router-dom

### 기본 설정
react-router-dom 에서 가져온 ReowserRouter를 가져와 루트 구성요소(APP)를 감싸줌

**BrowserRouter**
HTML HistoryAPI, replaceState를 사용하여 UI를 URL과 동기화 된 상태로 유지해줌

**Routes**
앱에서 생성될 모든 개별 경로에 대한 컨테이너/상위 역할을 함
Route로 생성된 자식 컴포넌트 중 매칭되는 첫번째 Route를 렌더링 해줌

**Route**
단일 경로를 만드는 데 사용, 두 가지 속성을 취함

1. path -> 원하는 컴포넌트의 URL 경로를 지정, 경로 이름은 원하는대로 정할 수 있음
경로 이름이 (/) 백슬래시인 컴포넌트는 앱이 처음 로드 될 때 마다 먼저 렌더링 됨,

2. element-> 경로에 맞게 렌더링 되어야 하는 컴포넌트를 지정함

**<Link> 를 이용하여 경로 이동하기**
구성요소는 HTML 의 앵커 요소와 유사, to 속성을 통해 이동할 경로를 지정함
앱 구성 요소에 나열된 경로 이름은 생성했기 떄문에, 링크를 클릭하면 경로를 살펴보고 해당 경로 이름으로 구성 요소를 렌더링 하게 됨


## 중첩 라우팅
ReactRouter의 가장 강력한 기능 중 하나, 복잡한 레이아웃 코드를 어지럽힐 필요가 없다
대부분의 레이아웃은 URL의 세그먼트에 연결되며, React Router는 이를 완전히 수용함

## URLSearchParams
URL의 쿼리 문자열을 대상으로 작업 할 수 있는 유틸리티 메서드

## useDebounce ( custum Hook ) 
사용자가 미리 결정된 시간 동안 타이핑을 멈출 때 까지 keyup 이벤트의 처리를 지연시킴 -> API 호출 수가 적어짐 -> 성능 개선

## useParams()
useParams 훅를 이용하여 Params를 가져 올 수 있다.

## 모달 창 외부 클릭 시, 모달 창 닫기 기능
1. 어디를 클릭하는 지 구분
2. 모달 창 바깥을 클릭하면 Callback 함수를 호출하는 Event 등록
3. Callback 함수 안에서 모달 닫아주기

=> useRef()
  특정 DOM을 선택할 때 사용하는 React Hook
  -> Javascript 에서는 getElementById, qureySelector 등으로 DOM을 선택
    **but** 리액트 에서는 ref 라는 것을 이용하여 DOM을 선택
- useRef() 사용법 -> useRef 를 이용하여 Ref 객체를 만들고, 이 객체를 특정 DOM에 ref값으로 설정함, 이렇게 되면 Ref 객체의 current값이 특정 DOM를 가리키게 됨

**DOM을 직접 선택해야 할 경우들**
1. 엘리먼트 크기를 가져와야 할 때
2. 스크롤바 위치를 가져와야 할 때
3. 엘리먼트에 포커스를 설정 해줘야 할 때 등등