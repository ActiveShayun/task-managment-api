import { useContext } from "react";
import { UseAuth } from "../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
    const { userSingIn, userSingOut } = useContext(UseAuth)
    const navigate = useNavigate()
    const handleLogin = () => {
        userSingIn()
            .then(result => {
                console.log(result.user);
                toast.success('Sign In Successful')
                navigate('/')
            })
            .catch(err => {
                console.log(err);
                toast.error('Sign In Failed')
            })
    }
    return (
        <div className="flex flex-col justify-center mt-10 gap-4">
            <h2 className="text-2xl font-bold text-center">Without SignIN Can't Use This Application</h2>
            <div className="flex justify-center gap-4">
                
                <button onClick={handleLogin}
                    className="bg-green-400 cursor-pointer py-2 px-5 rounded-md flex items-center gap-3">
                    <span><FaGoogle /></span>
                    SingIn</button>
            </div>
        </div>
    );
};

export default SignIn;