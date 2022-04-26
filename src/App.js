import Titile from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedDocId, setSelectedDocId] = useState(null);
  return (
    <div className="App">
      <Titile />
      <UploadForm />
      <ImageGrid
        setSelectedImg={setSelectedImg}
        setSelectedDocId={setSelectedDocId}
      />
      {selectedImg && (
        <Modal
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          selectedDocId={selectedDocId}
        />
      )}
    </div>
  );
}

export default App;
