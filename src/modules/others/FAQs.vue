  <template>
  <div class="container">
    <center><h1 style="margin-top:80px;">HOW CAN WE HELP YOU?</h1></center>
    <!-- <div class="container p-3 my-3 border"> -->
    <!-- <form>
    <input type="text" id="form" class="form-control form-control-lg" placeholder="Start Typing..."></form> -->
    <!-- </div> -->
    <p style="font-size: 19px;"><center>You can also browse what are you looking for</center></p>
    
    <p style="font-size:20px"> <strong>FREQUENTLY ASKED QUESTIONS</strong></p>
    
    <div class="accordion">
     <b-card no-body class="mb-4" style="border: 2px solid #e5b1fd;" v-for="item in items" :key="item.message">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1  style="border: 2px #e5b1fd;height: 50px;text-align:left;background-color:#e5b1fd; font-size:16px">
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
          <strong> {{ item.questions}}</strong></b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion">
        <b-card-body>
          <b-card-text style="font-size:15px;"><strong>Answer: </strong>{{ item.message }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
      { message: 'It will notify on your order status where you can able to see you order history also!', questions:"How do I know if my order was already confirmed?" },
      { message: 'We only accept cash on delivery payment method for now!',  questions:"What payments method do you accept?" },
      { message:"As long the status of your order is not yet confirmed you can change!", questions: "Can I change my order details?"},
      { message:"As long the status of your order is not yet confirmed you can cancel", questions: "Can I canccel my order?"}
    ]        
      }
    }
  }
</script>
<style>
#form{
  height: 50px;
  font-size: 16px;
}
</style>

