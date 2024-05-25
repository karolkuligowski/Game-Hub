import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
   params: {
    key: 'd662f4ba000b44a6950678098ef7ba37'
   } 
})