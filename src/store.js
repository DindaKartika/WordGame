// IMPORT MODULE
import createStore from 'unistore';
import axios from "axios";

const similarWordUrl = "http://api.datamuse.com/words?ml="
const randomWordUrl = "https://random-word-api.herokuapp.com/word?key=H7XVAQNL&number="

// SET THE GLOBAL STATE VARIABLES
const initialState = {
    password: "",
    username: "",
    email: "",

    is_login: false,
    choosen: 0,
    totalScore: 0,
    listKeyWords: [],
    listWords: [],
    listFalseWords: [],
    reset_local: false,
    result_stage: false,

    avatar: "",
    question: "",
    last_played: ""
}

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
                        avatar : response.data.user_data.avatar,
                        // last_played : new Date()
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
    async getRandomWords(number){
        // const self = this;
        await axios
        .get(randomWordUrl+number)
        .then(function(response){
            // console.log("random",response.data)
            const keyWordList = response.data
            store.setState({listKeyWords:keyWordList})
            // console.log("keywords",self.state.listKeyWords)
        })
        .catch(function(error){
            console.log(error)
        })
    },
    async getRandomFalseWords(number){
        // const self = this;
        await axios
        .get(randomWordUrl+number)
        .then(function(response){
            // console.log("random",response.data)
            const falseWordList = response.data
            store.setState({listFalseWords:falseWordList})
            // console.log("keywords",self.state.listKeyWords)
        })
        .catch(function(error){
            console.log(error)
        })
    },
    async getWords(word){
        console.log("word: " + word)
        // const self = this;
        await axios
        .get(similarWordUrl+word)
        .then(async function(response){
            // console.log(response.data)
            const rightWord = response.data.slice(0,3)
            await store.getRandomFalseWords(3)
            const falseWord = store.state.listFalseWords
            // console.log("fls",falseWord)
            var falseWordList = []
            for (let i = 0; i < 3; i++){
                falseWordList.push({word:falseWord[i], score: -30000})
            }
            // console.log("ffff",falseWordList)
            var answerList = rightWord.concat(falseWordList)
            answerList = store.shuffle(answerList)
            // console.log("jwb",answerList)
            store.setState({listWords:[...store.state.listWords, ...answerList]})
        })
        .catch(function(error){
            console.log(error)
        })
    },
    shuffle(array) {
        var m = array.length, t, i;
    
        // While there remain elements to shuffle…
        while (m) {
    
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
    
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
        }
    
        return array;
    }
})