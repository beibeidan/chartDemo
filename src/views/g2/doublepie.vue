<template>
  <div id="g2test3"></div>
</template>

<script lang="ts">
import * as G2 from '@antv/g2';
const { DataSet } = require('@antv/data-set');
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class G2DoublePie extends Vue {
  private drawpie() {
    const data = [
      {
        type: '男性',
        value: 56.4
      },
      {
        type: '女性',
        value: 43.6
      }
    ];
    const chart = new G2.Chart({
      container: 'g2test3',
      width: 600, // 指定图表宽度
      height: 300 // 指定图表高度
    });
    chart.source(data);
    chart.legend(false);
    chart.facet('rect', {
      fields: ['type'],
      padding: 20,
      showTitle: false,
      eachView: function eachView(view: any, facet: any) {
        const data = facet.data;
        let color = '';
        if (data[0].type === '男性') {
          color = '#0a9afe';
        } else {
          color = '#f0657d';
        }
        data.push({
          type: '其他',
          value: 100 - data[0].value
        });
        view.source(data);
        view.coord('theta', {
          radius: 0.8,
          innerRadius: 0.5
        });
        view
          .intervalStack()
          .position('value')
          .color('type', [color, '#eceef1'])
          .opacity(1);
        view.guide().html({
          position: ['50%', '50%'],
          html:
            '<div class="g2-guide-html"><p class="title">' +
            data[0].type +
            '</p><p class="value">' +
            (data[0].value + '%') +
            '</p></div>'
        });
      }
    });
    chart.render();
  }
  private mounted() {
    this.drawpie();
  }
}
</script>
<style lang="scss">
.g2-guide-html {
  width: 50px;
  height: 50px;
  vertical-align: middle;
  text-align: center;
  line-height: 0.1;
}

.g2-guide-html .title {
  font-size: 12px;
  color: #8c8c8c;
  font-weight: 300;
}

.g2-guide-html .value {
  font-size: 18px;
  color: #000;
  font-weight: bold;
}
</style>
