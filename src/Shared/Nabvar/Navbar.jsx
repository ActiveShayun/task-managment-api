import { NavLink } from "react-router-dom";
import AddTask from "../../Component/AddTask/AddTask";
import { useContext } from "react";
import { UseAuth } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, userSingOut } = useContext(UseAuth)
    return (
        <div className="mt-8 flex justify-center items-center gap-4">
            <NavLink to={'/'} className={'font-semibold'}>Home</NavLink>
            <NavLink to={'addTask/'} className={'font-semibold'}>Add Task</NavLink>
            {
                user ?
                    <button onClick={userSingOut}
                        className="bg-green-400 cursor-pointer font-semibold px-5 rounded-md">SignOut</button>
                    : <NavLink to={'login'} className={'font-semibold'}>Login</NavLink>
            }
            <div>
                {
                    user ?
                        <img title={user?.displayName} className="w-[40px] h-[40px] rounded-full"
                        src={user?.photoURL} alt="" />
                        : <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>

                }
            </div>
        </div>
    );
};

export default Navbar;