<template>
  <div class="container">
    <div class="containertop">
      <column></column>
      <pie></pie>
      <doublepie></doublepie>
    </div>
    <div class="containerbottom">
      <maptest></maptest>
      <heat></heat>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import column from './highcharts/column.vue';
import pie from './highcharts/pie.vue';
import maptest from './highcharts/maptest.vue';
import doublepie from './highcharts/doublePie.vue';
import heat from './highcharts/heat.vue';
@Component({
  components: {
    column,
    pie,
    doublepie,
    maptest,
    heat
  }
})
export default class Echarts extends Vue {
  private mounted() {}
}
</script>
<style lang="scss">
.container {
  display: flex;
  flex-flow: column;
  .containertop {
    display: flex;
  }
  .containerbottom {
    display: flex;
  }
}
</style>
