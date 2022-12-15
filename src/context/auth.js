import { createContext, useContext, useState } from "react";

export const AuthContext = createContext([]);

function AuthProvider({ children}) {

        const user = {
            id:"123456",
            name:"dev Victor",
            email:"vicgabriel.bahia@gmail.com"
        }
    
    return(
        <AuthContext.Provider value={}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context
}

export { AuthProvider, useAuth };