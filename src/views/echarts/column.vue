<template>
  <div id="etest1" style="width:600px;height:300px"></div>
</template>

<script lang="ts">
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class EColumn extends Vue {
  private drawBar() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = (this as any).$echarts.init(
      document.getElementById('etest1')
    );
    // 绘制图表
    myChart.setOption({
      title: { text: '柱状图' },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  }
  private mounted() {
    this.drawBar();
  }
}
</script>
<style lang="scss"></style>
