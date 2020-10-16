<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 100%;"></b-card>
    <div class="modal-content">
      <div class="modal-header" style="background-color: violet;">
        <h5
          class="modal-title"
          style="margin-left: 26%;font-size: 20px;"
        >CUSTOMER TRANSACTION HISTORY</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <b-container class="modal-history-row mb-3">
          <b-row class="font-weight-bold" cols="2">
            <b-col style="font-size: 15px;">USERNAME:</b-col>
            <b-col style="font-size: 15px;">FULL NAME:</b-col>
          </b-row>
        </b-container>
        <table class="modal-table">
          <tr>
            <th>COMPLETED ORDERS</th>
            <th>CANCELLED ORDERS</th>
          </tr>
        </table>
        <button
          type="button"
          class="btn btn-primary"
          data-dismiss="modal"
          style=" width: 15%;color: red;font-weight: bold;float: right;background-color: violet;"
        >CLOSE</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  }
};
</script>
<style scoped>
</style>

