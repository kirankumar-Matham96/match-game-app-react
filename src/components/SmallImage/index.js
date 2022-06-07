import './index.css'

const SmallImage = props => {
  const {thumbnailDetails, onMatchingThumbnail} = props
  const {thumbnailUrl} = thumbnailDetails

  const onSelectingThumbnail = () => {
    onMatchingThumbnail(thumbnailUrl)
  }

  return (
    <li className="thumbnail-image-item" onClick={onSelectingThumbnail}>
      <button type="button" className="thumbnail-btn">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default SmallImage
