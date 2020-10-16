<template>
  <div>
    <sidebar>
      <b-container class="mt-5">
        <div>
          <p class="d-flex justify-content-between porder">Account Management</p>
        </div>
        <div>
          <b-table-lite class ="table table-purple table-bordered" bordered hover  :items="items" thead-class="thtable bg-primary" :fields="fields">
            <template v-slot:header style="color:darkviolet">
            </template>
            <template v-slot:cell(ACTIONS)>
              <i
                class="fa fa-eye"
                style="font-size:20px;"
                v-b-modal.modal-center
                data-target="#AccountInformation"
                @click="accountModal"
              ></i>&nbsp;&nbsp;
              <i
                class="fa fa-user-times"
                style="font-size:20px;"
                data-toggle="modal"
                data-target="#RemoveAccount"
                @click="showAlert"
              ></i>
            </template>
            <template v-slot:cell(TYPE)>
              <div>
                <div>
                  <b-form-select v-model="selected" :options="options" :id="options.id"></b-form-select>
                </div>
              </div>
            </template>
          </b-table-lite>
        </div>
      </b-container>
    </sidebar>
    <account-info-modal  ref="childModal"/>
  </div>
</template>

<script>
import AccountInfoModal from "../basic/AccountInfo_Modal";
import sidebar from "../../components/frame/sidebar";
export default {
  components: {
    sidebar,
    AccountInfoModal
  },
  data() {
    return {
      show: false,
      selected: null,
      options: [
        { id: null, text: '--SELECT--', disabled: true } ,
        { id: 2, text: "ADMIN" },
        { id: 3, text: "CUSTOMER" }
      ],
      fields: [
       <span style="color:red">DATE</span>,
        "DATE",
        "USERNAME", 
        "EMAIL", 
        "TYPE", 
        "ACTIONS"
        ],
      items: [
        {
          isActive: false,
          DATE: "2020-09-01 05:20:36",
          USERNAME: "Admin_username",
          EMAIL: "admin_username@gmail.com",
          TYPE: "ADMIN",
          ACTION: ""
        },
        {
          isActive: false,
          DATE: "2020-10-01 05:20:36",
          USERNAME: "ajoc_gwapa",
          EMAIL: "ajoc_gwapa@gmail.com",
          TYPE: "CUSTOMER",
          ACTION: ""
        },
        {
          isActive: false,
          DATE: "2020-10-01 05:20:36",
          USERNAME: "jeanita_maot",
          EMAIL: "jeanita_maot@gmail.com",
          TYPE: "CUSTOMER",
          ACTION: ""
        }
      ]
    };
  },
  methods: {
    showAlert() {
      this.$swal({
        title: "Are you sure?",
        text: "You will not be able to recover this file!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!"
      }).then(result => {
        if (result.isConfirmed) {
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        } else {
          this.$swal("Cancelled", "Your imaginary file is safe :)", "error");
        }
      });
    },
    accountModal() {
      this.$refs.childModal.shown();
    }
  }
};
</script>
<style scoped>
.btn-secondary {
  color: purple;
  border-color: transparent;
  border: 1px solid violet;
  font-weight: bold;
  font-size: 15px;
}
.btn-secondary :hover {
  color: 0;
}
.btn-primary {
  color: #fff;
  font-weight: bold;
  background-color: purple;
  border-color: violet;
  font-size: 15px;
}
.premove {
  font-size: 20px;
  font-style: italic;
}
.modal-title {
  margin-bottom: 0;
  font-size: 20px;
  margin-left: 30%;
}
.fa-eye:hover {
  cursor: pointer;
}
.fa-user-times:hover {
  cursor: pointer;
}
.p1 {
  font-size: 12px;
  font-style: italic;
  color: purple;
  font-weight: bold;
}
.porder {
  color: purple;
  font-weight: bold;
  font-family: Segoe Script;
  font-style: italic;
  font-size: 24px;
  /* margin-top: 1%; */
}
.thtable {
  border: 2px solid darkviolet;
  text-align: center;
  /* font-weight: bold; */
  font-size: 10px;
  color: darkviolet ;
}
.table {
  font-size: 13px;
  border: 1px solid darkviolet;
  text-align: center;
}
</style>
