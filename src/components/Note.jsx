
import React from 'react';


function Note(props){
    return <div className="note">
      <h1 className="title">{props.title}</h1>
      <p className="content">{props.content}</p>
      <button onClick={()=>{props.update(props.id)}} className="note-delete">DELETE</button>
    </div>;
  }

  export default Note;
