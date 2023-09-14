import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
function Card(props){

    return(
      <div className="cardS">
        <div className="topS">
        <h2 className="nameS">{props.name}</h2>
        <div>
        <Avatar img={props.img}/>
        </div>
        </div>
        <Details description={props.description} />
  
    </div>
    )
  
  }

  export default Card