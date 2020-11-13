<template>
  <div :id="id" style="width:600px;height:300px"></div>
</template>

<script lang="ts">
import * as Highcharts from 'highcharts';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class HPie extends Vue {
  private id: string = 'htest2';
  private options: object = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: '2018年1月浏览器市场份额'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
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
        name: 'Brands',
        colorByPoint: true,
        data: [
          {
            name: 'Chrome',
            y: 61.41
            // sliced: true
            // selected: true
          },
          {
            name: 'Internet Explorer',
            y: 11.84
          },
          {
            name: 'Firefox',
            y: 10.85
          },
          {
            name: 'Edge',
            y: 4.67
          },
          {
            name: 'Safari',
            y: 4.18
          },
          {
            name: 'Sogou Explorer',
            y: 1.64
          },
          {
            name: 'Opera',
            y: 1.6
          },
          {
            name: 'QQ',
            y: 1.2
          },
          {
            name: 'Other',
            y: 2.61
          }
        ]
      }
    ]
  };
  private drawPie() {
    Highcharts.chart(this.id, this.options);
  }
  private mounted() {
    this.drawPie();
  }
}
</script>
<style lang="scss"></style>
