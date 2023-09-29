import axios from "axios"


export default axios.create ({
    baseURL : "https://api.rawg.io/api",
    params : {
        key : "daf8b389ddaa451492ba5a488cfaec7a"
    }
})