import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import note from "../notes";


function App(){
    return <div>
      <Heading />
      {note.map(contents => <Note
        key={contents.id}
        title= {contents.title}
        content={contents.content}
      />
      )
      }
      <Footer />


    </div>;
  }

  export default App;
