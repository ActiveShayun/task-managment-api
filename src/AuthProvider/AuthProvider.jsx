import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase";
import AxiosSecure from "../Hooks/AxiosSecure";
import toast from "react-hot-toast";

// eslint-disable-next-line react-refresh/only-export-components
export const UseAuth = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosSecure = AxiosSecure()

    const googleAProvider = new GoogleAuthProvider()
    const userSingIn = () => {
        setLoading(false)
        return signInWithPopup(auth, googleAProvider)
    }

    const userSingOut = () => {
        setLoading(false)
        return signOut(auth)
            .then(() => {
                console.log('user Sign out');
                toast.success('Logout Successful')
            })
            .catch(() => {
                console.log('failed signout');
            })
    }

    console.log(user);

    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, async currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log('currentUser === >', currentUser);
            if (currentUser?.email) {
                const user = {
                    name: currentUser?.displayName,
                    email: currentUser?.photoURL
                }

                const res = await axiosSecure.post('/users', user)
                console.log('user save db', res);
            }
        })
        return () => {
            unSubsCribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        userSingIn,
        userSingOut
    }
    return (
        <UseAuth.Provider value={authInfo}>
            {children}
        </UseAuth.Provider>
    );
};

export default AuthProvider;