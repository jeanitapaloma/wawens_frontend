import ROUTER from 'router';
import axios from 'axios'


const http = axios.create({
    baseURL :'http://127.0.0.1:8000',
    headers: {
        'Content-Type': 'application/json',
    }
});
export default {
    user: null,
    registeredUser: [],
    setUser(user) {
        this.user = user
    },

    getUser(user) {
        return this.user = user;
    },
    register(username, email, password,conpassword ) {
        this.registeredUser.push({
            username: username,
            email: email,
            password: password,
            conpassword: conpassword, 
        })
        console.log(username,email,password)
        http.post('/api/register',{
            username: username,
            email: email,
            password: password
        }).then(res => {
            console.log(res)
            ROUTER.push({path: '/dashboard'})
        })
        .catch(err => console.log(err))
        
        
    },

    login(email, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            if (this.registeredUser[i].email === email && this.registeredUser[i].password === password) {
                ROUTER.push('/dashboard')
                return this.registeredUser[i]
            }
        }
        alert("Email or Password is incorrect!")
        return null
    }
}