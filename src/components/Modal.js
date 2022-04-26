import React from "react";
import { motion } from "framer-motion";
import { projectFirestore, projectStorage } from "../firebase/firebase";
import { doc, deleteDoc } from "firebase/firestore";

const Modal = ({ selectedImg, setSelectedImg, selectedDocId }) => {
  const handleClick = (event) => {
    if (event.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  const handleRemove = (url) => {
    projectFirestore
      .collection("images")
      .doc(selectedDocId)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
    setSelectedImg(null);
    console.log("DELETED");
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged"
        initial={{ y: "-100vh" }}
        animate={{ y: "0vh" }}
      />
      <motion.button onClick={() => handleRemove(selectedImg)}>
        Remove
      </motion.button>
    </motion.div>
  );
};

export default Modal;
