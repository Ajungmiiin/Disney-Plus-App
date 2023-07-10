// 상세 요청주소 목록 인스턴스 화

const requests = {
  fetchNowPlaying : "movie/now_playing",
  fetchTrending : "/trending/all/week",
  fetchTopRated : "/movie/top_rated",
  fetchActionMovies : "/discover/movie?with_genres=28",
  fetchComedyMovies : "/discover/movie?with_genres=35",
  fetchHorrorMovies : "/discover/movie?with_genred=27",
  fetchRomanceMovies : "/discover/movie?with_genred=10749",
  fetchDocumentaries : "/discover/movie?with_genred=99"
}

export default requests