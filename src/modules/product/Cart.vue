<template>
<div class="container">
    <h1>WAWEN'S UBE HALAYA : Cart</h1>
    <hr>
    <div class="row" v-for="i in 5" :key="i">
        <div class="column" style="border-right-color: #e5b1fd;border-style: solid;border-width: thin;border-left-color: white;border-top-color: white;border-bottom-color: white;">
            <div class="selected-item">
                <div class="column" style="width:40%">
                    <img :src="require('@/assets/halaya.jpg')">
                </div>
                <div class="column" style="width:60%">
                    <h2>Product Name</h2>
                    <h4>Price: PHP 800.00 / order</h4>
                </div>
            </div>
        </div>
        <div class="column" style="border-right-color: white;border-style: solid;border-width: thin;border-left-color: #e5b1fd;border-top-color: white;border-bottom-color: white;">

        </div>
    </div>
</div>
</template>

<style>
.container {
    margin-top: 80px;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
}

h1 {
    color: #8028d8;
    font-family: Segoe Script;
    font-weight: bolder;
    text-align: center;
    padding-bottom: 2%;
}

h2 {
    color: #8028d8;
    font-family: Segoe Script;
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

.column {
    float: left;
    width: 50%;
    padding: 5px;
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
}

.selected-item img {
    width: 100%;
    height: 150px;
    border: 1px solid #e5b1fd;
    border-radius: 2px;
    padding: 3px;
}

.product {
    width: 30%;
    margin: 30px;
}

.form-group {
    width: 30%;
    margin: 30px;
    color: #8028d8;
}
</style>

<script>
export default {
    data() {},
    methods: {

    }
};
</script>
