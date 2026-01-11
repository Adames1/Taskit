import { db } from "../config";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

export const createProfile = async (userName, email, userUid) => {
  const profileRef = doc(db, "profiles", userUid);
  await setDoc(profileRef, {
    userName: userName,
    email: email,
    createAt: serverTimestamp(),
  });
};

export const getProfiles = async (userUid) => {
  if (!userUid) return null;

  const ref = doc(db, "profiles", userUid);
  const docSnap = await getDoc(ref);

  if (docSnap.exists()) {
    return docSnap.data();
  }

  return null;
};
