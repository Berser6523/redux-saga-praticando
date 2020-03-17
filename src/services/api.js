import axios from "axios";

const api = axios.create({
	baseURL: "https://api.github.com/users/Berser6523/repos"
});

export default api;
