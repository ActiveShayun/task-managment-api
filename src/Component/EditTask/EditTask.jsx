import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import AxiosSecure from "../../Hooks/AxiosSecure";
import { UseAuth } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";


const EditTask = () => {
    const navigate = useNavigate()
    const axiosSecure = AxiosSecure();
    const { user } = useContext(UseAuth)
    const { id } = useParams()
    console.log(id);
    const task = useLoaderData()
    console.log(task);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = async (data) => {
        console.log(data);
        const tasks = {
            email: user?.email,
            taskTitle: data.taskTitle,
            tasDescription: data.taskDescription,
            taskCategory: data.taskCategory
        }

        const res = await axiosSecure.put(`/editTask/${task?._id}`, tasks)
        console.log('task', res);
        if (res?.data?.modifiedCount > 0) {
            toast.success('Task Edit Successfully Done')
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
                        defaultValue={task?.taskTitle}
                        {...register("taskTitle", { required: true })}
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-accent w-full mb-3" required />
                </div>
                <div>
                    <span className="mb-2 block">Task Description</span>
                    <input
                        defaultValue={task?.tasDescription}
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
                            defaultValue={task?.taskCategory}
                            {...register("taskCategory", { required: true })}
                            className="text-black w-full text-sm border rounded-md p-2" required>
                            <option value='' >Choose Category</option>
                            <option value="toDo">To - Do</option>
                            <option value="inprogress">In progress</option>
                            <option value="done"> Done</option>
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

export default EditTask;