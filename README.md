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


