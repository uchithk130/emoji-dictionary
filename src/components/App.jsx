import React from "react";
import Card from "./card";
import contacts from "../emojis.js"
import "./styles.css";
function createCard(contact){
    return(
            <div key={contact.id}>
            <Card 
            id={contact.id}
            name= {contact.name} 
            img={contact.image}
            description={contact.description}/>
        </div>
    )
}

function App(){
    return(
        <div>
            <h1 className="heading">Emoji Dictionary</h1>
        
            <div className="contact-container">
        {contacts.map(createCard)}
      </div>
            
           
        </div>
    )
}

export default App;