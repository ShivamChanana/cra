import React from "react"
import List from "./list"
import Number from "./number"

const friends = ["tom", "plant", "smacky", "shivam"]

function getFriends(){
    return friends[Math.floor(Math.random() * friends.length)]
}


function getNumber(){
  return Math.floor(Math.random() * 10 + 1)
}

class App extends React.Component{

  render(){
    let toggle = true
    return(
      <div>
    
      <h1>Hello React</h1>
      <h2>hello</h2>
      {toggle === true ? 'hello toggle' : 'toggle state is false' }
      <hr/>
      <List
      friends = {friends}
      getFriends = {getFriends}
      />
      <Number
      getNumber = {getNumber}
      />
      </div>
    )
  }
}

export default App