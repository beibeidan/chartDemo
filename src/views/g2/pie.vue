<template>
  <div id="g2test2"></div>
</template>

<script lang="ts">
import * as G2 from '@antv/g2';
const { DataSet } = require('@antv/data-set');
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class G2Pie extends Vue {

  private drawpie() {
    const data = [
      {
        item: '事例一',
        count: 40,
        percent: 0.4
      },
      {
        item: '事例二',
        count: 21,
        percent: 0.21
      },
      {
        item: '事例三',
        count: 17,
        percent: 0.17
      },
      {
        item: '事例四',
        count: 13,
        percent: 0.13
      },
      {
        item: '事例五',
        count: 9,
        percent: 0.09
      }
    ];
    const chart = new G2.Chart({
      container: 'g2test2',
      width: 600, // 指定图表宽度
      height: 300 // 指定图表高度
    });
    chart.source(data);
    chart.coord('theta', {
      radius: 0.75
    });
    chart.tooltip({
      showTitle: false,
      itemTpl:
        '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
    });
    (chart as any)
      .intervalStack()
      .position('percent')
      .color('item')
      .label('percent', {
        formatter: function formatter(val: any, item: any) {
          return item.point.item + ': ' + val;
        }
      })
      .tooltip('item*percent', function(item: any, percent: any) {
        percent = percent * 100 + '%';
        return {
          name: item,
          value: percent
        };
      })
      .style({
        lineWidth: 1,
        stroke: '#fff'
      });
    chart.render();
  }
  private mounted() {
    this.drawpie();
  }
}
</script>
<style lang="scss"></style>
