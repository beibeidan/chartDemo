<template>
  <div class="container">
    <div class="containertop">
      <column></column>
      <pie></pie>
      <doublepie></doublepie>
    </div>
    <div class="containerbottom">
      <div id="g2test4"></div>
      <div id="g2test5"></div>
      <div id="g2test6"></div>
    </div>
  </div>
</template>

<script lang="ts">
import * as G2 from '@antv/g2';
import column from './g2/column.vue';
import pie from './g2/pie.vue';
import doublepie from './g2/doublepie.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    column,
    pie,
    doublepie
  }
})
export default class G2Chart extends Vue {}
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
