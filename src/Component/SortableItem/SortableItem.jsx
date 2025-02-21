import toast from "react-hot-toast";
import AxiosSecure from "../../Hooks/AxiosSecure";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const SortableItem = ({ task, refetch }) => {
  const axiosSecure = AxiosSecure()


  const taskDelete = async id => {
    const res = await axiosSecure.delete(`/taskDelete/${id}`)
    console.log(res);
    if (res.data.deletedCount > 0) {
      refetch()
      toast.success('Task Deleted Successful')
    }
  }

  const taskUpdated = async id => {
    const res = await axiosSecure.patch(`/updateCategory/${id}`)
    console.log(res);
    if (res.data.modifiedCount > 0) {
      refetch()
      toast.success('Task Move To Inprogress Successful')
    }
  }

  const taskUpdatedDone = async id => {
    const res = await axiosSecure.patch(`/updateDone/${id}`)
    console.log(res);
    if (res.data.modifiedCount > 0) {
      refetch()
      toast.success('Task Move To Done Successful')
    }
  }

  const editTask = async id => {
    const res = await axiosSecure.patch(`/updateDone/${id}`)
    console.log(res);
    // if (res.data.modifiedCount > 0) {
    //   refetch()
    //   toast.success('Task Move To Done Successful')
    // }
  }


  return (
    <div className="card bg-neutral text-neutral-content mb-4 h-[200px]">
      <div className="card-body items-center text-center">
        <Link to={`/edit/${task._id}`}>
          <span
            className="text-2xl text-white cursor-pointer absolute top-2 right-2"><CiEdit /></span>
        </Link>
        <h2 className="card-title">{task.taskTitle}</h2>
        <p>{task.tasDescription}.</p>
        <div className="flex gap-2 justify-center">

          {
            task.taskCategory === 'toDo' ?
              <button disabled={task.taskCategory === 'done'}
                onClick={() => taskUpdated(task._id)}
                className="btn btn-primary">Move To In progress</button> :
              <button disabled={task.taskCategory === 'done'} onClick={() => taskUpdatedDone(task._id)}
                className="btn btn-primary">Move To In Done</button>
          }

          <button
            onClick={() => taskDelete(task._id)}
            className="btn btn-ghost border border-green-600">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default SortableItem