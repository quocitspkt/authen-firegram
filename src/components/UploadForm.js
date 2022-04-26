import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [fileName, setFileName] = useState(null);
  const type = ["image/png", "image/jpeg"];

  const changeHandler = (event) => {
    let selected = event.target.files[0];
    if (selected && type.includes(selected.type)) {
      setFile(selected);
      setFileName(selected.name);
      console.log(event.target.files[0]);
    } else {
      setError("Please choose png or jpeg");
      setFile(null);
    }
  };
  return (
    <div>
      <form>
        <label>
          <input type="file" className="input" onChange={changeHandler}></input>
          <span>+</span>
        </label>
        <div className="output">
          {fileName && <div>{fileName} </div>}
          {error && <div>{error}</div>}
          {file && (
            <ProgressBar
              file={file}
              setFile={setFile}
              setFileName={setFileName}
            ></ProgressBar>
          )}
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
