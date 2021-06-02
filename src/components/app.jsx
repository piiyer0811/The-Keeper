import React,{useState} from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import note from "../notes";



function App(){

    const [notes,setNotes]=useState([]);
    const [newNote,setNewNote]=useState({title:"", content:""});

    function update(id){
      setNotes((prevValue)=>{
         return prevValue.filter((item,idx)=>{
                return idx!==id;
         })
      })
    }
    function handleChange(event){
      const {value,name}= event.target;
      setNewNote((prevValue)=>{
        return {
          ...prevValue,
             [name]:value
        };
      })
    }

    function handleClick(){
      if(newNote.title.length<=0){
        alert("The title cannot be empty");
        setNewNote({title:"", content:""});
        return;
      }
      if(newNote.content.length<=0){
        alert("The content cannot be empty");
        setNewNote({title:"", content:""});
        return;
      }

      setNotes((prevValue)=>{
        return [...prevValue,newNote];
      })
      setNewNote({title:"", content:""});
    }

    return <div>
      <Heading />
      <div className="middle">
      <form onSubmit={(event)=>{event.preventDefault();}}className="inputarea">
        <input name="title" onChange={handleChange} className="title" type="text" placeholder="Title goes here..." value={newNote.title} />
        <textarea name="content" onChange={handleChange} className="content" placeholder="Content goes here..." rows="4" value={newNote.content}  />
        <button onClick={handleClick} className="additem"><span>Add</span></button>
      </form>

    </div>
    {notes.map((note,idx)=>{
      return <Note
              key={idx}
              id={idx}
              title={note.title}
              content={note.content}
              update={update}
            />
    })}
      <Footer />


    </div>;
  }

  export default App;
