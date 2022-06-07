import './index.css'

const ScoreCard = props => {
  const {score, onPlayAgain} = props
  const onClickPlayAgainButton = () => {
    onPlayAgain()
  }

  return (
    <div className="score-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="cup-img"
      />
      <p className="your-score-text">YOUR SCORE</p>
      <h1 className="final-score">{score}</h1>
      <button
        type="button"
        className="play-again-button"
        onClick={onClickPlayAgainButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-icon"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ScoreCard
