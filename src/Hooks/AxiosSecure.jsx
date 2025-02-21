import axios from "axios";


const AxiosSecure = () => {
   const instance = axios.create({
      baseURL: 'http://localhost:5000'
     // baseURL: 'https://task-management-server-ten-azure.vercel.app'
   })

   return instance;
};

export default AxiosSecure;