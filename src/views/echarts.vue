<template>
  <div class="container">
    <div class="containertop">
      <column></column>
      <pie></pie>
      <doublepie></doublepie>
    </div>
    <div class="containermiddle">
      <maptest></maptest>
      <heat></heat>
    </div>
    <div class="containerbottom">
      <point></point>
    </div>
  </div>
</template>

<script lang="ts">
import column from './echarts/column.vue';
import pie from './echarts/pie.vue';
import doublepie from './echarts/doublePie.vue';
import maptest from './echarts/maptest.vue';
import heat from './echarts/thermodynamic.vue';
import point from './echarts/point.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    column,
    pie,
    doublepie,
    maptest,
    heat,
    point,
    chinapoint
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
  .containermiddle{
    display: flex;
  }
}
</style>
