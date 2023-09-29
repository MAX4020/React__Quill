import ReactQuill from "react-quill"
import { useState } from "react";
import axios from "axios"
import 'react-quill/dist/quill.snow.css';
import './App.css';

function App() { 
  const [value, setValue] = useState('');
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
  return (
    <>
      <ReactQuill 
      modules={module} 
      theme="snow" 
      value={value} 
      onChange={setValue} />;
      <button className="btn" onClick={async () => {
          JSON.stringify(value)
          console.log(value);
          try {
            await axios({
              url: "localhost:3001",
              headers: {
                "Content-type": "application/json"
              },
              params: {
                value
              },
              method: "GET",
              data: null
            }).then(({ data }) => {
              return data;
            });
          } catch (e) {
            console.log("Sending error", e);
          }
        }}>SAVE</button>
      
    </>
  );
}

export default App;
