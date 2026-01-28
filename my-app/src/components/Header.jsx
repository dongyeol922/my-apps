import React, { useState } from 'react'
import { NavLink } from 'react-router'

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('홍길동')

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: '#1a1a1a',
        height: '80px',
        fontFamily: 'Gothic, sans-serif'
      }}
    >
      <div className="container-fluid h-100">
        <div className="collapse navbar-collapse h-100" id="navbarNav">
          <ul className="navbar-nav me-auto h-100 align-items-center">
            <li className="nav-item">
              <NavLink
                to="/board"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
                style={{ color: 'white' }}
              >
                게시판
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
                style={{ color: 'white' }}
              >
                사용자리스트
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center h-100">
            {!isLoggedIn ? (
              <button
                className="btn btn-outline-light"
                onClick={handleLogin}
              >
                로그인
              </button>
            ) : (
              <div className="dropdown">
                <button
                  className="btn btn-outline-light dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userName}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <NavLink to="/profile" className="dropdown-item">
                      사용자 정보
                    </NavLink>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={handleLogout}
                    >
                      로그아웃
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
