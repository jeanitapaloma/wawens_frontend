import axios from "axios";
import Vue from 'vue'

const devInstance = createInstance("http://172.16.32.14:8000");
// const productionInstance = createInstance("http://localhost:3000"); // will change later

function createInstance(baseURL){
    return axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export default {
    install () {
        Vue.prototype.$http = devInstance
    }
};