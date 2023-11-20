import PropTypes from 'prop-types'
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext } from 'react';


// IMPORT APP FROM FIREBASE CONFIG 
const auth = getAuth(app);

//CREAETE A AUTH CONTEXT
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {


    const value = {
        auth
    }

    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export default AuthProvider

