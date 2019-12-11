import React from "react"



class List extends React.Component{
    render(){
        console.log("this is props", this)
        return(
            <div>
                
    <h2>List Component - {this.props.getFriends()}</h2>
            {this.props.friends.map((list, index)=>{
                return (
                    <li key = {index}>{list}</li>
                )
            })}
            </div>
        )
    }
}

export default List