import { useState, useEffect } from "react";
import { storage } from "../firebase/config";

const useFireStorageGallery = (storageCategory) => {
  const [imgsUrl, setImgsUrl] = useState([]);

  useEffect(() => {
    storage
      .ref(storageCategory)
      .listAll()
      .then((url) => {
        url.items.map((item) => {
          storage
            .ref(item.fullPath)
            .getDownloadURL()
            .then((url) => {
              setImgsUrl((prev) => [...prev, url]);
            });
        });
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, [storageCategory]);

  return imgsUrl;
};

export default useFireStorageGallery;
