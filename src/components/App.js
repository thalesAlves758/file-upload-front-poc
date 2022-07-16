import axios from 'axios';
import { useRef } from 'react';

export default function App() {
  const hiddenFileInput = useRef(null);

  function handleClick() {
    hiddenFileInput.current.click();
  }

  function handleChange(event) {
    const [selectedFile] = event.target.files;

    const formData = new FormData();
    formData.append('file', selectedFile);

    axios
      .post('http://localhost:5000/file', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="file-container">
        <h1>Envie um arquivo</h1>
        <button onClick={handleClick}>
          Enviar <ion-icon name="send"></ion-icon>
        </button>
        <input type="file" ref={hiddenFileInput} onChange={handleChange} />
      </div>
    </div>
  );
}
