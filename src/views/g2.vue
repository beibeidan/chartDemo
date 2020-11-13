<template>
  <div class="container">
    <div class="containertop">
      <column></column>
      <pie></pie>
      <div id="g2test3"></div>
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
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    column,
    pie,
  },
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
