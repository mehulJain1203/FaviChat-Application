import { createContext,useContext } from "react";
import {
    RecaptchaVerifier,
    signInWithPhoneNumber
} from 'firebase/auth';
import { auth } from "../Config/configurations";

const userAuthContext = createContext()

export function UserAuthContextProvider({children}) {


    function setUpReCaptcha(number){
        const recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {},
            auth
        );
        recaptchaVerifier.render()
        return signInWithPhoneNumber(auth,number,recaptchaVerifier)
    }
    return(
        <userAuthContext.Provider value={{setUpReCaptcha}}>
            {children}
        </userAuthContext.Provider>
    )
}


export function useUserAuth() {
    return useContext(userAuthContext)
}