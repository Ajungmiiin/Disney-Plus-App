import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

function Nav() {

  const [show, setShow] = useState(false)
  // 조건부 스타일링을 위해 사용할 state
  const { pathname } = useLocation()
  const [searchValue, setSearchValue] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll()) 

    return () => {
      window.removeEventListener("scroll",handleScroll())
    }
  }, []) // [] 이 빈 배열일 경우 렌더링 되고 1번만 실행, if 배열에 state 같은 게 있다면 해당 값이 변할 때 마다 실행

  const handleScroll = () => {
    if (window.scrollY > 50 ) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    navigate(`/search?q=${e.target.value}`)
  }

  return (
    <NavWrapper show={show}>
      <Logo>  
        <img 
          src='/images/logo.svg'
          alt="Disney Plus Logo"
          onClick={() => {window.location.href = "/"}} />
      </Logo>

      {pathname === "/" ? 
        (<Login 
          onClick={() =>{window.location.href = "/main"}}
        >
          Login
        </Login>) : 
        <Input 
        value={searchValue}
        onChange={handleChange}
        className="nav__input" 
        type="text" 
        placeholder='검색해주세요.'/>}

    </NavWrapper>
  )
}

export default Nav

const Login = styled.a`
  background-color: rgba(0,0,0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  transition: all .2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: gray;
    border-color: transparent;
  }
`

const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(255, 255, 255, .5);
  border-radius: 5px;
  color: white;
  padding: 10px 0;
  border: none;
  outline:1px solid #ddd;
  color: black;
  font-size: 18px;
  letter-spacing: 0.04em;
  text-align: center;

  @media screen and (max-width: 768px) {
    transform: translate(0, 0);
    right: 30px;
    top: 20px;
  }
`

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${props => (props.$show ? '#090b13' : 'transparent')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  transition : all .2s;
`

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img{
    display: block;
    width: 100%;
  }
`