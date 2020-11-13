<template>
  <div
    id="etest4"
    class="echarts-item-box"
    style="width:900px;height:600px"
  ></div>
</template>

<script lang="ts">
import echarts from 'echarts';
const shanghai = require('../../assets/shanghai.json');
import { Component, Vue } from 'vue-property-decorator';
echarts.registerMap('shanghai', shanghai);
@Component({
  components: {}
})
export default class EMap extends Vue {
  private drawHeat() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = (this as any).$echarts.init(
      document.getElementById('etest4')
    );
    const option: any = {
      // tooltip: {
      //   trigger: 'item',
      //   formatter: (params: any) => {
      //     if (params.value) {
      //       return params.name + ' ' + params.value;
      //     } else {
      //       return params.name;
      //     }
      //   }
      // },
      title: {
        text: 'iphone销量',
        subtext: '纯属虚构',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['iphone3', 'iphone4', 'iphone5']
      },
      visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true
      },
      // geo: {
      //   show: true,
      //   map: 'shanghai',
      //   label: {
      //     normal: {
      //       show: false
      //     },
      //     emphasis: {
      //       show: false
      //     }
      //   },
      //   layoutCenter: ['50%', '50%'],
      //   layoutSize: '100%',
      //   itemStyle: {
      //     normal: {
      //       areaColor: 'rgba(146, 197, 229, 0.6)',
      //       borderColor: 'rgba(255,255,255,0.35)'
      //     },
      //     emphasis: {
      //       areaColor: '#89bdea'
      //     }
      //   }
      // },
      series: [
        {
          name: 'iphone3',
          type: 'map',
          mapType: 'shanghai',
          roam: false,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          data: [
            { name: '浦东新区', value: Math.round(Math.random() * 1000) },
            { name: '崇明区', value: Math.round(Math.random() * 1000) },
            { name: '杨浦区', value: Math.round(Math.random() * 1000) },
            { name: '奉贤区', value: Math.round(Math.random() * 1000) },
            { name: '金山区', value: Math.round(Math.random() * 1000) },
            { name: '徐汇区', value: Math.round(Math.random() * 1000) },
            { name: '长宁区', value: Math.round(Math.random() * 1000) },
            { name: '静安区', value: Math.round(Math.random() * 1000) },
            { name: '黄浦区', value: Math.round(Math.random() * 1000) },
            { name: '宝山区', value: Math.round(Math.random() * 1000) },
            { name: '嘉定区', value: Math.round(Math.random() * 1000) },
            { name: '青浦区', value: Math.round(Math.random() * 1000) },
            { name: '松江区', value: Math.round(Math.random() * 1000) },
            { name: '闵行区', value: Math.round(Math.random() * 1000) },
            { name: '普陀区', value: Math.round(Math.random() * 1000) },
            { name: '虹口区', value: Math.round(Math.random() * 1000) }
          ]
        },
        {
          name: 'iphone4',
          type: 'map',
          mapType: 'shanghai',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          data: [
            { name: '长宁区', value: Math.round(Math.random() * 1000) },
            { name: '静安区', value: Math.round(Math.random() * 1000) },
            { name: '黄浦区', value: Math.round(Math.random() * 1000) },
            { name: '宝山区', value: Math.round(Math.random() * 1000) },
            { name: '嘉定区', value: Math.round(Math.random() * 1000) },
            { name: '青浦区', value: Math.round(Math.random() * 1000) },
            { name: '松江区', value: Math.round(Math.random() * 1000) },
            { name: '闵行区', value: Math.round(Math.random() * 1000) },
            { name: '普陀区', value: Math.round(Math.random() * 1000) },
            { name: '虹口区', value: Math.round(Math.random() * 1000) }
          ]
        },
        {
          name: 'iphone5',
          type: 'map',
          mapType: 'shanghai',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          data: [
            { name: '浦东新区', value: Math.round(Math.random() * 1000) },
            { name: '崇明区', value: Math.round(Math.random() * 1000) },
            { name: '杨浦区', value: Math.round(Math.random() * 1000) },
            { name: '奉贤区', value: Math.round(Math.random() * 1000) },
            { name: '金山区', value: Math.round(Math.random() * 1000) },
            { name: '徐汇区', value: Math.round(Math.random() * 1000) },
            { name: '长宁区', value: Math.round(Math.random() * 1000) },
            { name: '静安区', value: Math.round(Math.random() * 1000) },
            { name: '黄浦区', value: Math.round(Math.random() * 1000) },
            { name: '宝山区', value: Math.round(Math.random() * 1000) },
            { name: '嘉定区', value: Math.round(Math.random() * 1000) }
          ]
        }
      ]
    };
    myChart.setOption(option);
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
