import './index.css'

const NavBar = props => {
  const {score, time} = props
  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo"
      />
      <ul className="nav-items">
        <li>
          <p>
            Score: <span className="score">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="stop-watch-icon"
          />
          <p className="timer">{time} sec</p>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
