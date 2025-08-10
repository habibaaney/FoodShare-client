// import axios from "axios";
// import {
//   createUserWithEmailAndPassword,
//   deleteUser,
//   getAuth,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// import app from "../firebase/firebase.config";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const auth = getAuth(app);
//   const [user, setUser] = useState({});
//   const [loading, setLoading] = useState(true);

//   const createUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signIn = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const googleProvider = new GoogleAuthProvider();

//   const googleSignIn = () => {
//     return signInWithPopup(auth, googleProvider);
//   };

//   const updateUser = (userInfo) => {
//     return updateProfile(auth.currentUser, userInfo);
//   };

//   const removeUser = (user) => {
//     return deleteUser(user);
//   };

//   const logOut = () => {
//     return signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       console.log("🚀 ~ unsubscribe ~ currentUser:", currentUser);
//       setUser(currentUser);

//       axios.get("https://mission-scic11-server.vercel.app", {
//         headers: {
//           Authorization: `Bearer ${currentUser.accessToken}`,
//         },
//       });

//       setLoading(false);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const authInfo = {
//     user,
//     loading,
//     createUser,
//     signIn,
//     setUser,
//     logOut,
//     googleSignIn,
//     updateUser,
//     removeUser,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import axios from "axios";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

// ✅ Create the context
export const AuthContext = createContext();

// ✅ Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Auth functions
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const removeUser = (user) => {
    return deleteUser(user);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("🚀 ~ Auth State Changed ~ currentUser:", currentUser);
      setUser(currentUser);

      if (currentUser?.accessToken) {
        axios
          .get("https://mission-scic11-server.vercel.app", {
            headers: {
              Authorization: `Bearer ${currentUser.accessToken}`,
            },
          })
          .then((res) => {
            console.log("✅ Token sent to server", res.data);
          })
          .catch((err) => {
            console.error("❌ Token error:", err.message);
          });
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Provide auth data to children
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    setUser,
    logOut,
    googleSignIn,
    updateUser,
    removeUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
