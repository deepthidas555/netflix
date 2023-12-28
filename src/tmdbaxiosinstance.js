import axios from "axios";
const tmdbaxiosinstance=axios.create({
    baseURL: "https://api.themoviedb.org/3"
})
export default tmdbaxiosinstance;