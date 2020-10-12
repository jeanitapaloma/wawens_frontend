<template>
  <div>
    <sidebar>
      <b-container class="mt-5">
        <div>
          <p class="d-flex justify-content-between pothers">
            Others
            <button
              data-toggle="modal"
              data-target="#AddTestimonial"
              type="button"
              id="addbutton"
              v-show="categories[0].show"
              class="btn btn-light"
              aria-hidden="true"
            >+ Add Testimonial</button>
            <button
              data-toggle="modal"
              data-target="#AddPartner"
              type="button"
              id="addbutton"
              v-show="categories[1].show"
              class="btn btn-light"
            >+ Add Partner</button>
            <button
              data-toggle="modal"
              data-target="#AddFaqs"
              type="button"
              id="addbutton"
              v-show="categories[2].show"
              class="btn btn-light"
            >+ Add FAQ</button>
          </p>
          <!-- Modal -->
          <div
            class="modal fade"
            id="AddTestimonial"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-group btn-group-lg">
          <button
            type="button"
            class="btn btn-primary"
            @click="showCategoryInfo('testimonial');"
          >TESTIMONIALs</button>
          <button
            type="button"
            class="btn btn-primary"
            @click="showCategoryInfo('partner')"
          >PARTNERs</button>
          <button type="button" class="btn btn-primary" @click="showCategoryInfo('faqs')">FAQs</button>
        </div>
        <Testimonial class="testimonials" v-show="categories[0].show"></Testimonial>
        <Partner class="partner" v-show="categories[1].show"></Partner>
        <FAQ class="faqs" v-show="categories[2].show"></FAQ>
      </b-container>
    </sidebar>
  </div>
</template>
<script>
import Testimonial from "@/modules/others/Testimonial.vue";
import Partner from "@/modules/others/Partner.vue";
import FAQ from "@/modules/others/FAQs.vue";
import sidebar from "../../components/frame/sidebar";
export default {
  components: {
    sidebar,
    Testimonial,
    Partner,
    FAQ
  },
  data: () => ({
    testimonial: true,
    partner: false,
    faqs: false,
    categories: [
      { name: "testimonial", show: true },
      { name: "partner", show: false },
      { name: "faqs", show: false }
    ]
  }),
  methods: {
    showCategoryInfo(category) {
      this.categories.forEach(component => {
        if (component.name == category) {
          component.show = true;
        } else {
          component.show = false;
        }
      });
    }
  }
};
</script>

<style scoped>
#addbutton {
  width: 25%;
  background-color: blueviolet;
  color: white;
  margin-top: -0.5%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
.testimonials {
  margin-top: -5%;
}
.faqs {
  margin-top: -5%;
}
.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  width: 100%;
  margin-top: -5%;
}
.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  font-size: 18px;
  color: purple;
  font-weight: bold;
}
.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
  border-radius: 0;
  font-size: 18px;
  color: purple;
  font-weight: bold;
}
.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  font-size: 18px;
  color: purple;
  font-weight: bold;
}
.btn-primary:hover {
  text-decoration: underline;
  background-color: transparent !important;
}
.p1 {
  font-size: 12px;
  font-style: italic;
  color: purple;
  font-weight: bold;
}
table,
td {
  border: 2px solid violet;
  border-collapse: collapse;
  text-align: center;
  font-weight: bold;
}
.pothers {
  color: purple;
  font-weight: bold;
  font-family: Segoe Script;
  font-style: italic;
  margin-top: -2%;
  font-size: 20px;
}
.table-white {
  font-size: 18px;
  text-align: center;
  color: purple;
}
.table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid violet;
}
/* .thothers {
  border: 1px solid #ddd;
  padding: 8px;
  color: purple;
  width: 30%;
} */
.table {
  margin-bottom: 1rem;
  color: purple;
}
/* .thothers:hover {
  text-decoration: underline;
  cursor: pointer;
  pointer-events: none;
} */
</style>
