import { requestMaker } from "./requester";
const baseUrl = `http://localhost:3030/users`;

export const authServiceMaker = (token) => {
    const request = requestMaker(token);

    return {
        login: (data) => request.post(`${baseUrl}/login`, data),
        register: (data) => request.post(`${baseUrl}/register`, data),
        logout: () => request.get(`${baseUrl}/logout`),
    }
};
