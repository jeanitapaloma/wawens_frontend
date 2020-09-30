<template>
  <div class="container mt-5">
    <div class="text-center mt-5">
      <h2 class="font-weight-bolder">
        WAWEN's UBE HALAYA:
        <span>PARTNERS</span>
      </h2>
      <p class="tagline">Know your nearest ube halaya source and you can directly buy to them.</p>
    </div>
    <b-tabs>
      <b-tab v-for="(tab,i) in tabs" :key="i" :id="tab.id" :title="tab.title">
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
          title: "DISTRIBUORS",
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
  text-shadow: 2px 2px 4px violet;
  font-family: "Muli-Bold";
  font-size: 30px;
}
card {
  height: 100px;
}
.tagline {
  font-size: 20px;
  font-style: italic;
}
#d1 {
  height: 200px;
  width: 250px;
}
.font-weight-bolder {
  margin-top: 12px;
  color: darkviolet;
  text-shadow: 2px 2px 4px violet;
}
/* p{
margin-left: 350px;
} */
#distributor {
  color: darkviolet !important;
  text-shadow: 1px 1px 2px violet;
  border-color: darkviolet;
}
.shadow:hover {
  -moz-box-shadow: 0 0 10px #ccc;
  -webkit-box-shadow: 0 0 10px #ccc;
  box-shadow: 0 0 10px darkviolet;
  transform: scale(1.1);
}
</style>
