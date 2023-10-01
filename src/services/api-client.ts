import axios from "axios"


export default axios.create ({
    baseURL : "https://api.rawg.io/api",
    params : {
        key : "81ad36c6d2554322a74a092c17d08047"
    }
})