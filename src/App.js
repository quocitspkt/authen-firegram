import Titile from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import { useState } from "react";
import Modal from "./components/Modal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Reset from "./Reset/Reset";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedDocId, setSelectedDocId] = useState(null);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      {/* <Titile />
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
      )} */}
    </div>
  );
}

export default App;
