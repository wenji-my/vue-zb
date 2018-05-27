<template lang="html">
  <div class="brand-tab">
    <ul>
      <router-link to="homeA" tag="li" exact>
        <div>Home-A</div>
      </router-link>
      <router-link to="homeB" tag="li">
        <div>Home-B</div>
      </router-link>
      <router-link to="homeC" tag="li">
        <div>Home-C</div>
      </router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.brand-tab ul {
  width: 100%;
  display: table;
}
.brand-tab ul li {
  display: table-cell;
  border-bottom: 2px solid #ccc;
  padding: 4px 0;
}
.router-link-active {
  color: red;
  border-bottom: 2px solid red !important;
}
</style>
