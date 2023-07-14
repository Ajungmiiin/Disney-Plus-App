import axios from '../../api/axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './SearchPage.css'
import { styled } from 'styled-components'
import { useDebounce } from '../../hooks/useDebounce'

const SearchPage = () => {
  const navigate = useNavigate()
  const [searchResults, setSearchResults] = useState([])
  const useQurey = () => {
    return new URLSearchParams(useLocation().search);
    // 쿼리 문자열
  }
  let qurey = useQurey();
  const searchTerm = qurey.get("q")
  // 쿼리에 "q" 부분을 가져온다 (Input의 e.target.value)
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  // 커스텀 훅 호출

  useEffect(() => {
    if(debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])

  const fetchSearchMovie = async(searchTerm) => {
    try {

      const res = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`)
      setSearchResults(res.data.results)

    } catch (error) {
      console.log(error)
    }
  }

  if(searchResults.length > 0) {
    return (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path

            return (
              <div className="movie" key={movie.id}>
                <div className="movie__column-poster" onClick={() => navigate(`/${movie.id}`)}>
                  <img src={movieImageUrl} alt="movie" className='movie__poster' />
                  <div className="overlay">
                    {movie.name || movie.title || movie.original_name}
                  </div>
                </div>
              </div>
            )
          }
        })}
      </section>
    )
  } else {
    return (
      <section className='no-results'>
        <div className='no-results-text'>
          <p>
            찾고자 하는 "{searchTerm}" 에 맞는 영화가 없습니다.
          </p>
        </div>
      </section>
    )
  }

  return (
    <></>
  )
}

export default SearchPage
