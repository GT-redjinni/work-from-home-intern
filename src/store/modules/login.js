import axios from "../../axios";

const state = {
  user:{
    email:'',
    password:'',
  }
};

const actions = {
  async handleLogin({commit},logUser){
    const response = await axios.post("https://uat.redprix.com/api/login",logUser);
    localStorage.setItem('token',response.data.data.authorization);
    console.log(response.data.message);
    location.reload();
    commit("setUser",response);
  }
};

const mutations = {
  setUser:(state,logUser)=>(state.user=logUser)
};

export default {
  state,
  actions,
  mutations,
};