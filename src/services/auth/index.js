import ROUTER from 'router';

export default {
    user: null,
    registeredUser: [],
    setUser(user) {
        this.user = user
    },

    getUser(user) {
        return this.user = user;
    },
    register(username, email, password ,conpassword) {
        this.registeredUser.push({
            username: username,
            email: email,
            password: password,
            conpassword: conpassword, 
        })
        
        ROUTER.push('/dashboard')
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