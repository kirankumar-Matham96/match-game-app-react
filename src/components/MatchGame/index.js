import {Component} from 'react'
import Navbar from '../Navbar'
import BigImage from '../BigImage'
import SmallImage from '../SmallImage'
import Tabs from '../Tabs'
import ScoreCard from '../ScoreCard'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    const {imagesList} = this.props

    this.state = {
      score: 0,
      time: 60,
      imagesList,
      bigImageDetails: imagesList[0],
      thumbnailCategory: 'FRUIT',
      isGameOver: false,
      activeTab: 'FRUIT',
    }
  }

  componentDidMount = () => {
    this.timerId = setInterval(() => this.tick(), 1000)
  }

  tick = () => {
    const {time} = this.state

    if (time !== 0) {
      this.setState(prevState => ({
        time: prevState.time - 1,
      }))
    } else {
      clearInterval(this.timerId)
      this.setState({isGameOver: true})
    }
  }

  onTabChange = id => {
    this.setState({thumbnailCategory: id, activeTab: id})
  }

  onMatchingThumbnail = url => {
    const {imagesList, bigImageDetails} = this.state
    const {thumbnailUrl} = bigImageDetails

    if (thumbnailUrl === url) {
      const randomIndex = Math.ceil(Math.random() * imagesList.length) - 1
      this.setState(prevState => ({
        score: prevState.score + 1,
        bigImageDetails: prevState.imagesList[randomIndex],
      }))
    } else {
      console.log('Game Ended!')
      clearInterval(this.timerId)
      this.setState({isGameOver: true})
    }
  }

  onPlayAgain = () => {
    const {imagesList} = this.state
    this.setState({
      score: 0,
      time: 60,
      bigImageDetails: imagesList[0],
      thumbnailCategory: 'FRUIT',
      isGameOver: false,
      activeTab: 'FRUIT',
    })
    this.timerId = setInterval(() => this.tick(), 1000)
  }

  render() {
    const {
      score,
      time,
      imagesList,
      thumbnailCategory,
      bigImageDetails,
      isGameOver,
      activeTab,
    } = this.state
    const {tabsList} = this.props
    const filteredThumbnails = imagesList.filter(
      eachThumbnail => eachThumbnail.category === thumbnailCategory,
    )

    return (
      <>
        <Navbar score={score} time={time} />
        <div className="bg-container">
          {!isGameOver ? (
            <>
              <BigImage imageDetails={bigImageDetails} />
              <div className="thumbnails-container">
                <ul className="tabs-container">
                  {tabsList.map(eachTab => (
                    <Tabs
                      tabDetails={eachTab}
                      activeTab={activeTab}
                      key={eachTab.tabId}
                      onTabChange={this.onTabChange}
                    />
                  ))}
                </ul>
                <ul className="thumbnail-images-container">
                  {filteredThumbnails.map(eachImage => (
                    <SmallImage
                      thumbnailDetails={eachImage}
                      key={eachImage.id}
                      onMatchingThumbnail={this.onMatchingThumbnail}
                    />
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <ScoreCard score={score} onPlayAgain={this.onPlayAgain} />
          )}
        </div>
      </>
    )
  }
}

export default MatchGame
