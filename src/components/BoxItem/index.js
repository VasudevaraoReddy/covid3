import './index.css'

const BoxItem = props => {
  const {details, stateData, onClickBox, activeBox} = props
  const {id, imageUrl, displayText, altName, cName} = details
  let activeClassName = ''
  if (activeBox === id) {
    activeClassName = `${id}1`
  }
  return (
    <li
      className={`${cName} ${activeClassName} li-box`}
      onClick={() => onClickBox(id)}
    >
      <p>{displayText}</p>
      <img src={imageUrl} alt={altName} className="confirmed-image" />
      <p>{stateData?.[id]}</p>
    </li>
  )
}

export default BoxItem
