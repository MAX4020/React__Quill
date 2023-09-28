import { useState } from "react";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const MyComponent = () => {
  const [value, setValue] = useState('')
  var quill = new Quill('#editor', {
    modules: {
      toolbar: '#toolbar'
    }
  });

  return ( 
    <>
      <ReactQuill theme="snow" value={value} onChange={setValue}/>
    </>
   );
}
 
export default MyComponent;