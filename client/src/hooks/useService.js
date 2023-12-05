import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useService = (serviceMaker) => {
    const { token } = useContext(AuthContext)

    const service = serviceMaker(token);

    return service;
};