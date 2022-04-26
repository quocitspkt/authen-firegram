import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg, setSelectedDocId }) => {
  const { docs } = useFirestore("images");

  const onClickImgHandler = (url, id) => {
    setSelectedDocId(id);
    setSelectedImg(url);
    console.log(url, id);
  };

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1, rotate: 10 }}
            onClick={() => onClickImgHandler(doc.url, doc.id)}
          >
            <motion.img
              src={doc.url}
              alt="image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            ></motion.img>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
