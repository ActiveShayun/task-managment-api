import { useForm } from "react-hook-form";
import AxiosSecure from "../../Hooks/AxiosSecure";
import { useContext } from "react";
import { UseAuth } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
    const navigate = useNavigate()
    const axiosSecure = AxiosSecure();
    const { user } = useContext(UseAuth)
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = async (data) => {
        console.log(data);
        const task = {
            email: user?.email,
            taskTitle: data.taskTitle,
            tasDescription: data.taskDescription,
            taskCategory: data.taskCategory
        }

        const res = await axiosSecure.post('/addTask', task)
        console.log('task save db', res);
        if (res?.data?.insertedId) {
            toast.success('Task Save Successfully Done')
            navigate('/')
        }
    }



    return (
        <div className="mt-10">
            <h2 className="text-2xl font-semibold text-center">Add Your Task</h2>
            <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center lg:w-5/12 mx-auto "
            >
                <div>
                    <span className="mb-2 block">Task Title</span>
                    <input
                        {...register("taskTitle", { required: true })}
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-accent w-full mb-3" required />
                </div>
                <div>
                    <span className="mb-2 block">Task Description</span>
                    <input
                        {...register("taskDescription", { required: true })}
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-accent w-full mb-3" required />
                </div>
                {/* Choose Category */}
                <div className='flex justify-start gap-6'>
                    <div className="w-full">
                        <span className="mb-2 block">Choose Category</span>
                        <select id="countries"
                            defaultValue="Choose Category"
                            {...register("taskCategory", { required: true })}
                            className="text-black w-full text-sm border rounded-md p-2" required>
                            <option value='' >Choose Category</option>
                            <option value="toDo">To - Do</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button type="submit" className="bg-green-400 py-2 px-4 rounded-sm w-full mt-4">Add Task</button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;