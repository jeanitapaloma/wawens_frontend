<template>
<div class="container">
    <h1>WAWEN'S UBE HALAYA : Orders</h1>
</div>
</template>

<style>
.container {
    float: left;
    margin-top: 80px;
    width: 90%;
    margin-left: 10%;
    margin-right: 10%;
}

h1 {
    color: #8028d8;
    font-family: Segoe Script;
    font-weight: bolder;
    text-align: center;
    padding-bottom: 2%;
}
</style>

<script>
export default {
    mounted() {
        this.$http.post('api/orders', {
            account_id: 1,
            label: 'retail',
            choosen_delivery_date: 'Wednesday, September 23, 2020',
            choosen_delivery_time: '8 AM - 12 PM',
            payment: 'COD(Cash on Delivery)',
            active_contact: '09123456789',
            reciever_name: 'Rica Debuayan',
            delivery_address: 'Cebu City',
            customer_message: 'ayaw edilver',
            total_amount: 1800,
            delivery_fee: 0,
            overall_payment: 1800
        }).then(res => console.log(res))
          .catch(err => console.log(err))
    }
}
</script>
