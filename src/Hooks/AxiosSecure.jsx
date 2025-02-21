import axios from "axios";


const AxiosSecure = () => {
   const instance = axios.create({
      baseURL: 'https://task-management-server-ten-azure.vercel.app'
     // baseURL: 'https://task-management-server-ten-azure.vercel.app'
   })

   return instance;
};

export default AxiosSecure;