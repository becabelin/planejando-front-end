import axios from "axios";


export function getCep(cep) {
    const response = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response;
}
