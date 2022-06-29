import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection(collection).onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push(doc.data());
      });
      //   const filter = documents
      //     .filter((trip) => {
      //       if (age) {
      //         return trip.age >= age.min && trip.age <= age.max;
      //       }
      //       return trip;
      //     })
      //     .filter((trip) => {
      //       if (price.max && price.min) {
      //         return (
      //           trip.price === "FROM_CALLPHONE" ||
      //           (trip.price <= price.max && trip.price >= price.min)
      //         );
      //       }
      //       return trip;
      //     })
      //     .filter((trip) => {
      //       const trueKeys = Object.keys(difficulty);
      //       const trueDifficulty = trueKeys.filter((key) => {
      //         return difficulty[key];
      //       });
      //       if (trueDifficulty.includes(trip.difficultyLevelText)) {
      //         return trip;
      //       } else return null;
      //     });

      setDocs(documents);
    });
    return () => unsub();
  }, [collection]);
  return { docs };
};

export default useFirestore;
