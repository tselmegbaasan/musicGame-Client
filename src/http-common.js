
import axios from "axios";

export default axios.create({
    baseURL: "https://intense-coast-97787.herokuapp.com/api",
    headers: {
        "Content-type": "application/json"
    }
});