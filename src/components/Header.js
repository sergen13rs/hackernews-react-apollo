import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { AUTH_TOKEN, USER_NAME, USER_ID } from '../constants'

const Header = ({history}) => {
  const authToken = localStorage.getItem(AUTH_TOKEN)
  const userName = localStorage.getItem(USER_NAME)

  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1">Hacker News</div>
        <Link to="/" className="ml1 no-underline black">
          new
        </Link>
        <div className="ml1">|</div>
        <Link to="/top" className="ml1 no-underline black">
          top
        </Link>
        <div className="ml1">|</div>
        <Link to="/search" className="ml1 no-underline black">
          search
        </Link>
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link to="/create" className="ml1 no-underline black">
              submit
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-fixed black">
        {authToken ? (
          <React.Fragment>
            <div
              className="ml1"
            >
              {userName}
            </div>
            <div className="ml1">|</div>
            <div
              className="ml1 pointer"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                localStorage.removeItem(USER_NAME)
                localStorage.removeItem(USER_ID)
                history.push(`/`)
              }}
            >
              logout
            </div>
          </React.Fragment>
        ) : (
          <Link to="/login" className="ml1 no-underline black">
            login
          </Link>
        )}
      </div>
    </div>
  )
}

export default withRouter(Header)
