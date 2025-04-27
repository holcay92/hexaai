import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const fetchLogos = async () => {
  const querySnapshot = await getDocs(collection(db, "logo"));
  const logos = querySnapshot.docs.flatMap((doc) => {
    const nestedLogos = Object.values(doc.data())
      .filter((item) => item && item.id && item.name && item.image)
      .sort((a: any, b: any) => a.id - b.id);
    return nestedLogos.map((logo: any) => ({
      id: logo.id,
      name: logo.name,
      image: logo.image,
    }));
  });
  return logos;
};
