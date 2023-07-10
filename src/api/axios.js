import axios from 'axios'
// axios 모듈 불러오기

// 인스턴스 생성
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key : "0fa91a4fe4466120a00067067934492c",
    language: "ko-KR"
    }
})

export default instance
// 생성한 인스턴스 내보내기