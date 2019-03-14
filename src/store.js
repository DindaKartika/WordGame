// IMPORT MODULE
import createStore from 'unistore';
import axios from "axios"

// SET THE GLOBAL STATE VARIABLES
const initialState = {
    password: "",
    username: "",
    email: "",
    is_login: false,
    choosen: 0,
    totalScore: 0,
};

export const store = createStore(initialState)

// STORE ACTIONS MODULE
export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    },
    postLogout: state => {
        return { is_login: false };
    },
    postLogin: async state => {
        const data = {
            username: state.username,
            password: state.password
        };
        await axios
            .post("https://api-todofancy.herokuapp.com/api/auth", data)
            .then(function(response) {
                if (response.data.hasOwnProperty("status")) {
                    console.log("Login Berhasil!", response)
                    store.setState({
                        is_login: true,
                        username: response.data.user_data.username,
                        email: response.data.user_data.email,
                        avatar : response.data.user_data.avatar
                    });
                    console.log("cek store", store.getState())
                } else {
                    console.log("Login Gagal");
                }
            })
            .catch(function(error) {
                console.log(error);
            }
        );
    },
})