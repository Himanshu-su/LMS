// // ButtonContext.js

// import React, { createContext, useContext, useState } from 'react';

// // Create a context
// const TokenContext = createContext();

// // Create a Context Provider component
//  function TokenProvider({ children }) {
//   // Define the state or values you want to provider
//   const [token, setToken] = useState('');

//   // You can provide other functions or values as well

//   return (
//     <TokenContext.Provider value={{ token, setToken }}>
//       {children}
//     </TokenContext.Provider>
//   );
// } 

// // Create a custom hook to use the context
// function useTokenContext() {
//   return useContext(TokenContext);
// }
// export {TokenProvider,useTokenContext}
