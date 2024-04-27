// // AuthContext.js
 import React, { createContext, useContext, useState } from 'react';

// // Create a context
const AuthContext = createContext();

// // Create a Context Provider component
export function AuthProvider({ children }) {
  // Define the state or values you want to provide
  const [status, setStatus] = useState('');
  const [purchaseId,setPurchaseId]=useState(null)
  const [orders,setOrders]=useState(``)
  const [purchaseData, setPurchaseData] = useState([]);
  const apiUrl=`https://b1.techstreet.in/api`
  

  // You can provide other functions or values as well
  const contextValue = {
    purchaseId,
    setPurchaseId, // Make sure this is correctly set
    // Other context values and functions
    orders,setOrders,
    status, setStatus,
    purchaseData, setPurchaseData,
apiUrl,
  };
  return (
    <AuthContext.Provider 
    // value={{ 
    //   status, setStatus,
    //   //  token, setToken
    //   purchaseId,setPurchaseId
    //    }}
    value={contextValue}
       >
      {children}
    </AuthContext.Provider>
  );
}

// Create a custom hook to use the context
export function useAuthContext() {
  return useContext(AuthContext);
}


// // const TokenContext = createContext();

// // // Create a Context Provider component
// //  function TokenProvider({ children }) {
// //   // Define the state or values you want to provider
// //   const [token, setToken] = useState('');

// //   // You can provide other functions or values as well

// //   return (
// //     <TokenContext.Provider value={{ token, setToken }}>
// //       {children}
// //     </TokenContext.Provider>
// //   );
// // } 

// // // Create a custom hook to use the context
// // function useTokenContext() {
// //   return useContext(TokenContext);
// // }
// // export {TokenProvider,useTokenContext}
