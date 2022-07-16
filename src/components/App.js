import { useRef, useState } from 'react';

export default function App() {
  const [file, setFile] = useState({});

  const hiddenFileInput = useRef(null);

  function handleClick() {
    hiddenFileInput.current.click();
  }

  function handleChange(event) {
    const [selectedFile] = event.target.files;
    setFile(selectedFile);
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
