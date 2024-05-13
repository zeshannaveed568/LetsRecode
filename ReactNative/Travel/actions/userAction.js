import axios from "axios";
import { useNavigation } from "@react-navigation/native";



export const register = (email, password) => async (dispatch) => {
    const navigation = useNavigation();
    const baseUrl = "http://localhost:5000/api/travel";


    dispatch({ type: REGISTER_USER_REQUEST })

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    if (username === "" || email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    try {
        const response = await axios.post(`${baseUrl}/register`, {
            username: username,
            email: email,
            password: password,
        }, config);

        dispatch({
            // type: REGISTER_USER_SUCCESS,
            payload: data.user
        })

        console.log(response.data);
        console.log("User created successfully");

        navigation.navigate("Login");
    } catch (error) {
        console.log(error);
    }

}

export const login = (email, password) => async (dispatch) => {
    const baseUrl = "http://localhost:5000/api/travel";

    const navigation = useNavigation();


    dispatch({ type: LOGIN_REQUEST })

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    try {
        const response = await axios.post(`${baseUrl}/login`, {
            email: email,
            password: password,
        }, config);

        dispatch({
            payload: data.user
        })

        console.log(response.data);
        console.log("User logged in successfully");

        navigation.navigate("Home");
    } catch (error) {
        console.log(error);
    }

}