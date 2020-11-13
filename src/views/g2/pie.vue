<template>
  <div id="g2test2"></div>
</template>

<script lang="ts">
import * as G2 from '@antv/g2';
// import DataSet from '@antv/data-set';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class G2Column extends Vue {
  private mounted() {
    const data = [
      {
        type: '评估中',
        percent: 0.23
      },
      {
        type: '设计中',
        percent: 0.28
      },
      {
        type: '正在开发',
        percent: 0.3
      },
      {
        type: '已上线',
        percent: 0.19
      }
    ];
    // const sum = 500;
    // const ds = new DataSet();
    // const dv = ds.createView().source(data);
    // dv.transform({
    //   type: 'map',
    //   callback: function callback(row: any) {
    //     row.value = sum * row.percent;
    //     return row;
    //   },
    // });
    // // Step 1: 创建 Chart 对象
    // const chart = new G2.Chart({
    //   container: 'g2test2', // 指定图表容器 ID
    //   width: 600, // 指定图表宽度
    //   height: 300, // 指定图表高度
    // });

    // chart.tooltip(false);
    // chart.legend({
    //   position: 'right-top',
    //   offsetX: -100,
    // });
    // chart.coord('theta', {
    //   radius: 0.75,
    //   innerRadius: 0.6,
    // });
    // (chart as any)
    //   .intervalStack()
    //   .position('percent')
    //   .color('type', ['#0a7aca', '#0a9afe', '#4cb9ff', '#8ed1ff'])
    //   .opacity(1)
    //   .label('percent', {
    //     offset: -18,
    //     textStyle: {
    //       fill: 'white',
    //       fontSize: 12,
    //       shadowBlur: 2,
    //       shadowColor: 'rgba(0, 0, 0, .45)',
    //     },
    //     rotate: 0,
    //     autoRotate: false,
    //     formatter: function formatter(text: any, item: any) {
    //       return String(item.point.percent * 100) + '%';
    //     },
    //   });
    // (chart as any).guide().html({
    //   position: ['50%', '50%'],
    //   html:
    //     '<div class="g2-guide-html"><p class="title">项目总计</p><p class="value">500</p></div>',
    // });

    // // Step 4: 渲染图表
    // chart.render();
  }
}
</script>
<style lang="scss"></style>
