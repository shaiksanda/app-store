// Write your code here
import './index.css'

const TabItem = props => {
  const {data, updateActiveTabId} = props
  const {displayText, tabId} = data

  const handleClick = () => {
    updateActiveTabId(tabId)
  }
  return (
    <li className="tab-item">
      <button type="button" className="tab-heading" onClick={handleClick}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
