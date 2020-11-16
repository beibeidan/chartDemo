<template>
  <div :id="id" style="width:900px;height:600px"></div>
</template>

<script lang="ts">
import * as Highcharts from 'highcharts';
import Highmaps from 'highcharts/modules/map';
Highmaps(Highcharts);
// import shanghai from '../../assets/shanghai.json';
const shanghai = require('../../assets/shanghai.json');
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Hmaptest extends Vue {
  private id: string = 'htest4';
  private data: object[] = [
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
  ];
  private options: object = {
    legend: {
      layout: 'vertical',
      align: 'right'
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    colorAxis: {
      showInLegend: false,
      min: 0,
      minColor: 'rgb(255,255,255)',
      maxColor: '#006cee'
    },
    series: [
      {
        name: 'iphone3',
        type: 'map',
        mapData: shanghai,
        data: this.data,
        joinBy: 'name'
      },
      {
        name: 'iphone4',
        type: 'map',
        mapData: shanghai,
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
        ],
        joinBy: 'name'
      },
      {
        name: 'iphone5',
        type: 'map',
        mapData: shanghai,
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
        ],
        joinBy: 'name'
      }
    ]
  };
  private drawMap() {
    Highcharts.mapChart(this.id, this.options);
  }
  private mounted() {
    this.drawMap();
  }
}
</script>
<style lang="scss"></style>
