<template>
<div class="container">
    <form :action="'submit_order'" method="get">
        <h1>WAWEN'S UBE HALAYA : Cart</h1>
        <hr>
        <div class="row">
            <div class="column" style="border-right-color: #e5b1fd;border-style: solid;border-width: thin;border-left-color: white;border-top-color: white;border-bottom-color: white;">
                <h2>Selected Products</h2>
                <div v-for="i in 3" :key="i">
                    <div class="selected-item">
                        <div class="column1" style="width:40%">
                            <img :src="require('@/assets/halaya.jpg')">
                        </div>
                        <div class="column1" style="width:50%;margin-left:5%;">
                            <h2>Product Name</h2>
                            <h4>Price: PHP 800.00 / order</h4>
                            <span id="quantity">
                                <button @click="decrement()">&mdash;</button>
                                <input type="text" :value="quantity" disabled>
                                <button @click="increment()">&#xff0b;</button>
                            </span>
                            <br>
                            <button style="margin-top:5px;background-color:#cca4f5;color:white;" type="button" class="btn">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column" style="border-right-color: white;border-style: solid;border-width: thin;border-left-color: #e5b1fd;border-top-color: white;border-bottom-color: white;">
                <div style="margin-left:10px;">
                    <h2>Delivery Details</h2>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>
                                <i style="color:red;">*</i>Preferred Delivery Date:
                            </label>
                            <input type="date" class="form-control" v-model="date" required>
                            <p style="color:red;font-style:italic;" id="date"></p>
                        </div>
                        <div class="form-group col-md-6">
                            <label>
                                <i style="color:red;">*</i>Preferred Delivery Time:
                            </label>
                            <select style=" height: 30px;" v-model="time" class="form-control" placeholder="---select---" required>
                                <option>8 AM - 12 PM</option>
                                <option>1 PM - 5 PM</option>
                            </select>
                            <p style="color:red;font-style:italic;" id="time"></p>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>
                                <i style="color:red;">*</i>Payment Option:
                            </label>
                            <select style=" height: 30px;" v-model="payment" class="form-control" placeholder="---select---" required>
                                <option>COD (Cash on Delivery)</option>
                                <option>PayMaya</option>
                                <option>GCash</option>
                                <option>BDO</option>
                                <option>BPI</option>
                            </select>
                            <p style="color:red;font-style:italic;" id="payment"></p>
                        </div>
                        <div class="form-group col-md-6">
                            <label>
                                <i style="color:red;">*</i>Active Contact Number:
                            </label>
                            <input v-model="contact" type="tel" pattern="^(09|\+639)\d{9}$" class="form-control" placeholder="+639xxxxxxxxx or 09xxxxxxxxx" required>
                            <p style="color:red;font-style:italic;" id="contact"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>
                            <i style="color:red;">*</i>Receiver's Complete Name:
                        </label>
                        <input type="text" class="form-control" v-model="receiver" required>
                        <p style="color:red;font-style:italic;" id="receiver"></p>
                    </div>
                    <div class="form-group">
                        <label>
                            <i style="color:red;">*</i>Complete Name Delivery Address:
                        </label>
                        <div class="form-row" style="margin-bottom:3px;">
                            <div class="col">
                                <input type="text" class="form-control" v-model="company" placeholder="Company(Optional)">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" v-model="building" placeholder="Apartment, building, etc.(Optional)">
                            </div>
                        </div>
                        <div class="form-row" style="margin-bottom:3px;">
                            <div class="col">
                                <input type="text" class="form-control" v-model="brgy" placeholder="Sitio,Road,Barangay" required>
                                <p style="color:red;font-style:italic;" id="brgy"></p>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" v-model="municipality" placeholder="Municipality" required>
                                <p style="color:red;font-style:italic;" id="municipality"></p>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col">
                                <input type="text" class="form-control" v-model="city" placeholder="City" required>
                                <p style="color:red;font-style:italic;" id="city"></p>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" v-model="province" placeholder="Province" required>
                                <p style="color:red;font-style:italic;" id="province"></p>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Message/Delivery Instructions(Optional):</label>
                        <textarea class="form-control" v-model="message" rows="5"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <button id="submit" class="btn btn-primary btn-lg" type="submit">Continue to Submit Order</button>
    </form>
</div>
</template>

<style scoped>
.container {
    margin-top: 80px;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
}

h1 {
    color: #8028d8;
    font-family: Segoe Print;
    font-weight: bolder;
    text-align: center;
    padding-bottom: 2%;
}

h2 {
    color: #8028d8;
    font-family: Segoe Print;
    font-weight: bold;
}

hr {
    width: 100%;
    background-color: #e5b1fd;
    display: block;
    height: 1px;
    border-style: inset;
    border-width: 1px;
}

.column,
.column1 {
    float: left;
    width: 50%;
    height: auto;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

.selected-item {
    width: 100%;
    height: 150px;
    margin-top: 10px;
}

.selected-item img {
    width: 100%;
    height: 150px;
    border: 1px solid #e5b1fd;
    border-radius: 2px;
    padding: 3px;
}

#quantity button {
    text-align: center;
    border: 1px solid #808080;
    color: white;
    background-color: #808080;
    width: 35px;
    font-weight: bolder;
    font-size: 16px;
}

#quantity input {
    text-align: center;
    width: 100px;
    color: black;
    font-size: 15px;
    border: 2px solid #808080;
}

#submit {
    float: right;
    color: #8028d8;
    border-radius: 10px;
    border: 2px solid #8028d8;
    background-color: #e5b1fd;
    font-weight: bolder;
    height: 40px;
    font-size: 15px;
    margin-top: 50px;
    margin-bottom: 50px;
}

.form-group input,
.form-group textarea,
.form-group select {
    border: 1px solid #e5b1fd;
    font-size: 13px;
}

.form-group input {
    height: 30px;
}

.form-group label {
    font-weight: bolder;
    font-size: 16px;
}

.form-group option {
    background-color: #f0e6ff;
    font-size: 13px;
}

#brgy,
#municipality {
    display: none;
}
</style>

<script>
import ROUTER from "@/router";
export default {
    data() {
        return {
            quantity: 1,
            date: null,
            time: null,
            payment: null,
            contact: null,
            receiver: null,
            company: null, //optional
            building: null, //optional
            brgy: null,
            municipality: null,
            city: null,
            province: null,
            message: null //optional
        };
    },
    methods: {
        submit() {
            ROUTER.push("/submit_order");
        }
    }
};
</script>
