import axios from "axios";


const AxiosSecure = () => {
   const instance = axios.create({
      baseURL: 'http://localhost:5000'
   })

   return instance;
};

export default AxiosSecure;