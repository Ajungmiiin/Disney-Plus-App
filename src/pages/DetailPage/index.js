import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components';
import axios from '../../api/axios'
import "./DetailPage.css"
const DatailPage = () => {
  let {movieId} = useParams(); 
  const [movie, setMovie] = useState({})

  const truncate = (str, n) => {
    return str?.length > n ? `${str.substring(0, n)}...` : str;
  }

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `movie/${movieId}`
      )
      setMovie(res.data)
    }
    fetchData()
  }, [movieId])

  if (!movie) return null
  return (
    <section className='movie-detail'>
      <div className="movie-detail-left">
        <button
        onClick={() => {
          window.history.back()
        }}>{`<`}</button>
        <h1 className='datail-movie-title'>{movie.title || movie.name}</h1>
        <p className="detail-movie-desc">{truncate(movie.overview, 100)}</p>
      </div>
      <img 
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="Movie Img" 
        className="modal__poster-img" />
    </section>
  )
}

export default DatailPage

