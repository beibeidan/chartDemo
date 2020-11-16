<template>
  <div :id="id" style="width:900px;height:600px"></div>
</template>

<script lang="ts">
import * as Highcharts from 'highcharts';
const shanghai = require('../../assets/shanghai.json');
import Highmaps from 'highcharts/modules/map';
Highmaps(Highcharts);

import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class HighHeat extends Vue {
  private id: string = 'htest5';


  private drawHeat() {
    
  }

  private mounted() {
    this.drawHeat();
  }
}
</script>
<style lang="scss">
.echarts-item-box {
  position: relative;
  width: 100%;
  height: 100%;
  .echarts-item {
    width: 100%;
    height: 100%;
  }
}
</style>
