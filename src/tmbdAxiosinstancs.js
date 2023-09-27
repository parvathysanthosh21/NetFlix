import axios from "axios";

const tmbdAxiosinstancs = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
export default tmbdAxiosinstancs;