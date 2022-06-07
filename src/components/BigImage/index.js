import './index.css'

const BigImage = props => {
  const {imageDetails} = props
  const {imageUrl} = imageDetails

  return (
    <div className="big-image-container">
      <img src={imageUrl} alt="match" className="big-image" />
    </div>
  )
}

export default BigImage
