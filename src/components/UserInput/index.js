import './index.css'

const UserInput = props => {
  const {inputList} = props
  const {userText, textCount} = inputList

  return (
    <li className="listEl">
      <p className="userList-text">
        {userText} : {textCount}
      </p>
    </li>
  )
}

export default UserInput
