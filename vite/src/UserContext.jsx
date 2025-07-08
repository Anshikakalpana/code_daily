
// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const UserContext = createContext({});


// export function UserProvider({ children }) {
//   const [user, setUser] = useState(null);

//   const finduser = async () => {
//     const res = await axios.get(`http://localhost:3000/auth/refetchuser`, { withCredentials: true });
//     console.log(res.data);
//     setUser(res.data); 
//   };

//   useEffect(() => {
//     finduser();
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);     
  const [loading, setLoading] = useState(true); 

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:3000/auth/refetchuser", {
        withCredentials: true, 
      });
      if (res.data && res.data.user) {
        setUser(res.data.user);
        console.log("User fetched:", res.data.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("User not logged in:", err.response?.data || err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(); 
  }, []);


  if (loading) return null;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}