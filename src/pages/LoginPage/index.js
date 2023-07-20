import React, { useEffect, useState } from 'react'
import "./Login.css"
import axios from '../../api/axios'
import requests from '../../api/request'
import { styled } from 'styled-components'

const LoginPage = () => {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async() => {
    // 현재 상영중인 영화 정보를 가져오기
    const res = await axios.get(requests.fetchNowPlaying)
    // 여러 영화 중 하나의 ID 가져오기
    const movieId = res.data.results[
      Math.floor(Math.random() * res.data.results.length)
    ].id

    // 특정 영화의 더 상세한 정보를 가져오기
    const {data : movieDetail} = await axios.get(`movie/${movieId}`, {
      params: {append_to_response: "videos"}
    })

    setMovie(movieDetail)
  }

  console.log(movie.backdrop_path)

  return (
    <>
    <div className='wrapper'>
    <div 
      className="backdrop"
      style={{
        backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition : `center`,
        backgroundSize : `cover`,
      }}></div>
      <img className="logo" src='/images/logo.svg' alt="" />
      <h1>이 모든 이야기가 여기에 지금 스트리밍 중</h1>
      <span>구독을 시작하려면 이메일 주소를 입력하세요.</span>
      <form action="GET">
        <input type="email" placeholder='이메일 주소'/>
        <button type='submit'>구독하기</button>  
      </form>
      <div className="information">
        <p>*유료 멤버십 월 9,900원 / 연 99,000원</p>
        <p>*연간 구독 시 최대 16% 할인된 가격</p>
      </div> 
      <section>
        <ul className='info-list'>
          <li className='info'>
            <h3>1,200편 이상의 영화</h3>
            <strong>어워드 수상에 빛나는 블록버스터 및 단독 공개작 포함</strong>
          </li>
          <li className='info'>
            <h3>20,000편 이상의 에피소드</h3>
            <strong>코미디, 드라마, 범죄 실화 등 다양한 장르</strong>
          </li>
          <li className='info'>
            <h3>신규 및 단독 공개 콘텐츠</h3>
            <strong>매주 새로운 영화 및 시리즈 공개</strong>
          </li>
          <li className='info'>
            <h3>최대 4대 기기 동시 스트리밍</h3>
            <strong>원하는 기기에서 원하는 방식으로 시청</strong>
          </li>
        </ul>
      </section>     
    </div>
    </>
  )
}

export default LoginPage
