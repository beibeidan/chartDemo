<template>
  <div
    id="etest5"
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
export default class EHeat extends Vue {
  private geoCoorMap: object = {
    黄埔区: [121.490317, 31.222771],
    崇明区: [121.397516, 31.626946],
    浦东新区: [121.567706, 31.245944],
    杨浦区: [121.522797, 31.270755],
    奉贤区: [121.458472, 30.912345],
    金山区: [121.330736, 30.724697],
    徐汇区: [121.43752, 31.179973],
    长宁区: [121.4222, 31.218123],
    静安区: [121.448224, 31.229003],
    宝山区: [121.489934, 31.398896],
    嘉定区: [121.250333, 31.383524],
    青浦区: [121.113021, 31.151209],
    松江区: [121.223543, 31.03047],
    闵行区: [121.375972, 31.111658],
    普陀区: [121.392499, 31.241701],
    虹口区: [121.491832, 31.26097]
  };
  private convertData(data: any) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      const geoCoord = (this.geoCoorMap as any)[data[i].name];
      if (geoCoord) {
        res.push(geoCoord.concat(data[i].value));
      }
    }
    return res;
  }
  private drawHeat() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = (this as any).$echarts.init(
      document.getElementById('etest5')
    );
    const option: any = {
      backgroundColor: '#404a59',
      title: {
        text: '上海空气质量',
        subtext: '纯属虚构',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      visualMap: {
        min: 0,
        max: 500,
        splitNumber: 5,
        inRange: {
          color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
        },
        textStyle: {
          color: '#fff'
        }
      },
      geo: {
        show: true,
        map: 'shanghai',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        layoutCenter: ['50%', '50%'],
        layoutSize: '100%',
        // itemStyle: {
        //   normal: {
        //     areaColor: 'rgba(146, 197, 229, 0.6)',
        //     borderColor: 'rgba(255,255,255,0.35)'
        //   },
        //   emphasis: {
        //     areaColor: '#89bdea'
        //   }
        // },
        roam: true,
        itemStyle: {
          areaColor: '#323c48',
          borderColor: '#111'
        },
        emphasis: {
          label: {
            show: false
          },
          itemStyle: {
            areaColor: '#2a333d'
          }
        }
      },
      series: [
        {
          name: 'AQI',
          type: 'heatmap',
          coordinateSystem: 'geo',
          data: this.convertData([
            { name: '崇明区', value: 234 },
            { name: '浦东新区', value: 123 },
            { name: '杨浦区', value: 235 },
            { name: '奉贤区', value: 236 },
            { name: '金山区', value: 237 },
            { name: '徐汇区', value: 499 },
            { name: '长宁区', value: 85 },
            { name: '静安区', value: 447 },
            { name: '黄浦区', value: 58 },
            { name: '宝山区', value: 345 },
            { name: '嘉定区', value: 239 },
            { name: '青浦区', value: 75 },
            { name: '松江区', value: 165 },
            { name: '闵行区', value: 444 },
            { name: '普陀区', value: 58 },
            { name: '虹口区', value: 348 }
          ])
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
