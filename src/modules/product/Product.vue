<template>
  <div id="container">
    <b-card-group deck>
      <b-card title="Title" :img-src="require('@/assets/halaya.jpg')" img-alt="Image" img-top>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>

      <b-card title="Title" :img-src="require('@/assets/buchi.jpg')" img-alt="Image" img-top>
        <b-card-text>This card has supporting text below as a natural lead-in to additional content.</b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>

      <b-card title="Title" :img-src="require('@/assets/buchi.jpg')" img-alt="Image" img-top>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This card has even longer content than the first to show that equal height action.
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>
<style scoped lang="scss">
#container {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
}
</style>