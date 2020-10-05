<template>
  <div class="container mt-5 pt-5">
    <div class="text-center mt-5">
      <h1 class="font-weight-bolder">
        WAWEN's UBE HALAYA:
        <span>PARTNERS</span>
      </h1>
      <p class="tagline">Know your nearest ube halaya source and you can directly buy to them.</p>
    </div>
    <b-tabs>
      <b-tab  v-for="(tab,i) in tabs" :key="i" :id="tab.id" :title="tab.title">
        <b-row class="pt-3">
          <b-col lg="3" v-for="(item,j) in tab.items" :key="j">
              <b-card
                class="mb-4 p-0"
                :img-src="require(`@/assets/${item.img}.png`)"
                img-top
                img-width="100px"
              ></b-card>
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      tabs: [
        {
          id: "distributor",
          title: "DISTRIBUTORS",
          items: [
            { img: "D1" },
            { img: "D2" },
            { img: "D3" },
            { img: "D4" },
            { img: "D5" },
            { img: "D6" },
            { img: "D7" },
            { img: "D8" }
          ]
        },
        {
          id: "reseller",
          title: "RESELLERS",
          items: [
            { img: "R1" },
            { img: "R2" },
            { img: "R3" },
            { img: "R4" },
            { img: "R5" },
            { img: "R6" },
            { img: "R7" },
            { img: "R8" }
          ]
        }
      ]
    };
  }
};
</script>

<style>
.font-weight-bolder {
  color: darkviolet;
  text-shadow: 2px violet;
  font-family: "Muli-Bold";
  font-size: 40px;
  margin-top: 5%;
}
.tagline {
  font-size: 20px;
  font-style: italic;
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    font-size: 20px;
    font-weight: bold;
    border: 0;
    text-decoration: underline;
}
.nav {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    border: 0;
    margin-top: 3%;
}
.nav-tabs .nav-link {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    font-size: 20px;
    color: violet;
    font-weight: bold;
}
.card-img, .card-img-top {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
    margin-top: 10%;
    box-shadow: 8px 8px 5px grey;
}
.mb-4, .my-4 {
    margin-bottom: 1.5rem !important;
    border: none;
}
</style>
