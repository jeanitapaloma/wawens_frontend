<template>
<div id="app">
    <b-navbar toggleable="lg" variant="none" class="navbar" fixed="top">
        <b-navbar-brand style="padding-bottom:60px;">
            <img :src="require('@/assets/logo.png')" class="logo-brand">
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto" id="navbar-nav">
                <b-nav-item to="/dashboard" style="padding:5px;">HOME</b-nav-item>

                <b-nav-item-dropdown text="ABOUT" style="padding:5px;color:blue;" right>
                    <b-dropdown-item class="drop" to="story">Our Story</b-dropdown-item>
                    <b-dropdown-item class="drop" to="testimonial">Testimonials</b-dropdown-item>
                    <b-dropdown-item class="drop" to="partner">Partner</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="PRODUCT" style="padding:5px;" right>
                    <b-dropdown-item class="drop" to="product">All Product</b-dropdown-item>
                    <b-dropdown-item class="drop" to="bottle">Ube Halaya Bottle</b-dropdown-item>
                    <b-dropdown-item class="drop" to="ubechi">Ube Ubechi</b-dropdown-item>
                    <b-dropdown-item class="drop" to="cake">Ube Cake</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item to="faq" style="padding:5px;">FAQs</b-nav-item>
                <b-nav-item to="login" style="padding:5px;">LOGIN</b-nav-item>
                <b-nav-item to="register" style="padding:5px;">SIGNUP</b-nav-item>
                <b-nav-item to="cart">
                    <i class="fa fa-shopping-cart" style="font-size:28px"><span v-if="cartNo > 0" class="badge" style="font-size:8px;background-color:red;">{{cartNo}}</span></i>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<style scoped>
.navbar {
    background-image: linear-gradient(#e5b1fd, #efe0f8);
    height: 60px;
    width: 100%;
    border-radius: 0px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
}

#navbar-nav {
    color: white;
    font-size: 18px;
    font-weight: bold;
}

.logo-brand {
    width: 55px;
    height: 55px;
}

#app {
    width: 100%;
    top: 0px;
    position: relative;
}

.drop {
    font-size: 15px;
}
</style>

<script>
import ROUTER from '@/router'
export default {
    computed: {
        cartNo() {
            var total = 0
            if (localStorage.getItem('carts')) {
                JSON.parse(localStorage.getItem('carts')).forEach(item => {
                    total += item.quantity
                });
            }
            return total
        }
    },
    methods: {
        redirect(parameter) {
            ROUTER.push(parameter)
        },
    }
}
</script>
