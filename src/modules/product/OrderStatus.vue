<template>
<div class="container">
    <h1>ORDER STATUS</h1>
    <i><i style="color:red;">*</i>Only pending and confirmed orders will appear here, once your order is marked complete or cancelled it will no longer appear here.</i>
    <br><i><i style="color:red;">*</i>CANCEL or UPDATE on orders can only be done when order is still pending.</i>
    <div class="empty" v-if="orderSubmitted.length == 0">
        <i class="fa fa-tasks" style="color: #8028d8"></i>
        <span class="description"><b>NO ORDERS HAVE BEEN RECORDED</b></span>
        <span style="font-size: 15px;">Start ordering your UBEfavorites.</span>
    </div>
    <div class="transaction">
        
    </div>
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

i{
  font-size: 15px;
}

.empty, .transaction{
    width: 100%;
    margin-top: 25px;
    margin-bottom: 25px;
    float: left;
    min-height: 450px;
    overflow-y: hidden;
    text-align: center;
    border: solid 2px rgb(127, 127, 127);
}

.empty i {
    font-size: 100px;
    padding-top: 150px;
}

.empty span {
    width: 100%;
    float: left;
}

.empty .description {
    font-size: 24px;
}
</style>

<script>
export default {
    data() {
        return {
            orderSubmitted: []
        }
    }
}
</script>
