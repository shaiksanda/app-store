// Write your code here
import './index.css'

const AppItem = props => {
  const {appData} = props
  const {appName, imageUrl} = appData
  console.log(appData)
  return (
    <li className="app">
      <img src={imageUrl} alt={appName} className="app-icon" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
