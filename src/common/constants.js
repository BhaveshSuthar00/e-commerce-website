import axios from "axios";
import Cookies from 'universal-cookie';
// export const BaseURL = `http://localhost:2200`;
export const BaseURL = `https://indigo-foal-toga.cyclic.app`
const cookies = new Cookies();
export const jwt = () => cookies.get('token') || "";

export const setHeaderToken = token => {
    if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {  
        delete axios.defaults.headers.common['Authorization'];
    }  
}

export const category = [
    "t-shirt",
    "shirt"
];

export const brand = [
    "Roadster",
    "polo",
    "roadster",
    "H&M",
    "Urbano ",
    "puma",
    "Mast & Harbour",
    "arrow",
    "HIGHLANDER",
    "Dennis Lingo",
    "WROGN",
    "V Dot"
];

export const discount = [
    15,
    20,
    25,
    30,
    35,
    39,
    40,
    43,
    45,
    50,
    53,
    55,
    57,
    60,
    63
];