import './index.css'

const Tabs = props => {
  const {tabDetails, onTabChange, activeTab} = props
  const {tabId, displayText} = tabDetails

  const className = activeTab === tabId ? 'tab-item active-tab' : 'tab-item'

  const onClickTab = () => {
    onTabChange(tabId)
  }

  return (
    <li>
      <button type="button" className={className} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default Tabs
