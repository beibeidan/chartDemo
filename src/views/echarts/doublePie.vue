<template>
  <div id="etest3" style="width:600px;height:300px"></div>
</template>

<script lang="ts">
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class EDoublePie extends Vue {
  private drawPie() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = (this as any).$echarts.init(
      document.getElementById('etest3')
    );
    // 绘制图表
    const option: any = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{c}人'
      },
      series: [
        {
          type: 'pie',
          center: ['30%', '50%'],
          radius: ['35%', '60%'],
          data: [
            {
              name: '男',
              value: 335,
              itemStyle: {
                color: '#34A1FD'
              }
            },
            {
              name: '女',
              value: 78,
              itemStyle: {
                color: '#F06461'
              }
            }
          ]
        },
        {
          type: 'pie',
          radius: ['35%', '60%'],
          center: ['75%', '50%'],
          data: [
            {
              name: '办事群众',
              value: 335,
              itemStyle: {
                color: '#FF8911'
              }
            },
            {
              name: 'vip人员',
              value: 335,
              itemStyle: {
                color: '#0CCD6B'
              }
            },
            {
              name: '黑名单人员',
              value: 335,
              itemStyle: {
                color: '#4F4F4F'
              }
            }
          ]
        }
      ]
    };
    myChart.setOption(option);
  }
  private mounted() {
    this.drawPie();
  }
}
</script>
<style lang="scss"></style>
