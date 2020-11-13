<template>
  <div id="etest2" style="width:600px;height:300px"></div>
</template>

<script lang="ts">
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class EPie extends Vue {
  private drawPie() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = (this as any).$echarts.init(
      document.getElementById('etest2')
    );
    // 绘制图表
    myChart.setOption({
      title: {
        text: '饼图示例',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
  }
  private mounted() {
    this.drawPie();
  }
}
</script>
<style lang="scss"></style>
