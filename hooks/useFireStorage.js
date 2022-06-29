import { useState, useEffect } from "react";
import { storage } from "../firebase/config";

const useFireStorage = (imgName) => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (imgName) {
      storage
        .ref(`tripPicture/${imgName}`)
        .getDownloadURL()
        .then((url) => {
          setImgUrl(url);
        })
        .catch((err) => {
          console.log(err, "err");
        });
    }
  }, [imgName]);
  return imgUrl;
};

export default useFireStorage;
