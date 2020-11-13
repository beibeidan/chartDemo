<template>
  <div :id="id" style="width:600px;height:300px"></div>
</template>

<script lang="ts">
import * as Highcharts from 'highcharts';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class HdoublePie extends Vue {
  private id: string = 'htest3';
  private options: object = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: '人群及男女占比'
    },
    tooltip: {
      pointFormat: '{point.name}: <b>{point.y}</b>'
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        innerSize: '50%', // 环内圈大小
        size: 200, // 圆的大小
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      },
      series: {
        states: {
          hover: {
            halo: {
              size: 0
            }
          }
        }
      }
    },
    series: [
      {
        name: '男女比例',
        colorByPoint: true,
        center: ['20%', '50%'],
        data: [
          {
            name: '男',
            y: 335,
            color: '#34A1FD'
          },
          {
            name: '女',
            y: 78,
            color: '#F06461'
          }
        ]
      },
      {
        name: '人群占比',
        colorByPoint: true,
        center: ['75%', '50%'],
        data: [
          {
            name: '办事群众',
            y: 335,
            color: '#FF8911'
          },
          {
            name: 'vip人员',
            y: 335,
            color: '#0CCD6B'
          },
          {
            name: '黑名单人员',
            y: 335,
            color: '#4F4F4F'
          }
        ]
      }
    ]
  };
  private drawdoublePie() {
    Highcharts.chart(this.id, this.options);
  }
  private mounted() {
    this.drawdoublePie();
  }
}
</script>
<style lang="scss"></style>
