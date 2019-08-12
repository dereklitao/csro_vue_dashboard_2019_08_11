<script>
import { Pie, mixins } from "vue-chartjs";
export default {
  extends: Pie,
  mixins: [mixins.reactiveProp],
  data() {
    return {
      options: {
        cutoutPercentage: 45,
        animation: {
          onComplete: function() {
            var ctx = this.chart.ctx;
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";
            ctx.font = "bold 13px Helvetica Neue";
            var meta = this.chart.controller.getDatasetMeta(0);
            meta.data.forEach((pie, index) => {
              ctx.fillStyle = pie._model.backgroundColor;
              ctx.fillText(
                this.data.datasets[0].data[index] +
                  (index === 0 ? "  在线" : "  离线"),
                pie._model.x,
                pie._model.y - index * -20
              );
            });
          }
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>



