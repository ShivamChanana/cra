import React from "react"


class Number extends React.Component{

    render(){
        let num = this.props.getNumber()
        let msg;
        if(num === 7){
            msg = <div>
                <h1>You win</h1>
                <hr/>
                <img src= "https://cdn.motor1.com/images/mgl/GNqnx/s3/most-expensive-cars-lead.jpg"/>
                </div>
                }else{
                 msg= <h1>You lose</h1>
                }
            
        
        return(
            <div>
    <h1> Random Number = {num}</h1>
    {/* {num ===7 ? "you win": "you lose"}
    {num ===7 && <img src = "https://images.pexels.com/photos/3336152/pexels-photo-3336152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
      } */}
      {msg}
            </div>
        )
    }
    }

export default Number