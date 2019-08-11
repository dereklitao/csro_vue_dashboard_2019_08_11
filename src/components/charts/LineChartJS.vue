<script>
import { Line, mixins } from "vue-chartjs";
import { truncate } from "fs";
export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>