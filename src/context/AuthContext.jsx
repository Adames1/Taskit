import { auth } from "../services/config";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getProfiles } from "../services/profile/profiles";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfiles] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);

      if (user) {
        const profilesData = await getProfiles(user.uid);
        setProfiles(profilesData);
      } else {
        setProfiles(null);
      }

      setLoading(false);
    });

    return () => unsubcribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, profile, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
