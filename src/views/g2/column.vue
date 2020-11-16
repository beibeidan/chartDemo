<template>
  <div id="g2test1"></div>
</template>

<script lang="ts">
import * as G2 from '@antv/g2';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class G2Column extends Vue {
  private mounted() {
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ];

    // Step 1: 创建 Chart 对象
    const chart = new G2.Chart({
      container: 'g2test1', // 指定图表容器 ID
      width: 600, // 指定图表宽度
      height: 300, // 指定图表高度
    });

    // Step 2: 载入数据源
    chart.source(data);

    // Step 3：创建图形语法，绘制图形
    chart.interval().position('genre*sold');

    // Step 4: 渲染图表
    chart.render();
  }
}
</script>
<style lang="scss"></style>
