import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../Hooks/AxiosSecure";
import { useContext } from "react";
import { UseAuth } from "../../AuthProvider/AuthProvider";
import SortableItem from "../SortableItem/SortableItem";


const ParentDrag = () => {
  const axiosSecure = AxiosSecure()
  const { user } = useContext(UseAuth)

  const { data: allTask = [], refetch } = useQuery({
    queryKey: ['task'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allTask/${user?.email}`)
      console.log(res.data);
      return res.data
    }
  })

  const todo = allTask.filter(task => task?.taskCategory == 'toDo')
  const inprogress = allTask.filter(task => task?.taskCategory == 'inprogress')
  const done = allTask.filter(task => task?.taskCategory == 'done')

  return (
    <div className="min-h-screen bg-gray-100 grid gap-4 grid-cols-1 lg:grid-cols-3 p-8 mt-8">
      <div>
        <h2 className="text-lg font-bold text-center mb-4">---To Do---</h2>
        <div>
          {
            todo.length === 0 ?
              <p className="text-red-400 text-center">No Task Available</p> :
              todo?.map(task => <SortableItem refetch={refetch} key={task._id} task={task} />)
          }
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold text-center mb-4">---In Progress---</h2>
        <div>
          {
            inprogress.length === 0 ?
              <p className="text-red-400 text-center">No Task Available</p> :
              inprogress?.map(task => <SortableItem refetch={refetch} key={task._id} task={task} />)
          }
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold text-center mb-4">---Done---</h2>
        <div>
          {
            done.length === 0 ?
              <p className="text-red-400 text-center">No Task Available</p> :
              done?.map(task => <SortableItem refetch={refetch} key={task._id} task={task} />)
          }
        </div>
      </div>
    </div>
  );
};

export default ParentDrag;