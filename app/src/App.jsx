import ReactQuill from "react-quill"
import { useState } from "react";
import axios from "axios"
import 'react-quill/dist/quill.snow.css';
import './App.css';

function App() {  
  const [value, setValue] = useState('');
  const sendData = () =>{
     fetch("save.php",{method:"post",data:value})
     console.log(value)
  }

 
  var toolbarOptions = [['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean'] ]                                        // remove formatting butt]
  const module = {
    toolbar: toolbarOptions
  }
  const downloadFile = () => {
    const data = new Blob(
      [
        JSON.stringify({value}),
      ],
      { type: "application/json" }
    );
    const url = URL.createObjectURL(data);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `save.json`;
    document.body.append(anchor);
    anchor.style.display = "none";
    anchor.click();
    anchor.remove();
  };
  return (
    <>
    <form method="post" enctype="multipart/form-data" action="">
      <ReactQuill 
      type ="file"
      modules={module} 
      theme="snow" 
      value={value} 
      onChange={setValue} />
      <button className="btn" onClick={()=>downloadFile()}>SAVE</button>
      <button className="btn" onClick={()=>sendData()}>SEND</button>
      </form>
    </>
  );
}

export default App;
