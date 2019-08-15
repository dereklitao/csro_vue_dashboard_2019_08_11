<script>
import { Pie, mixins } from "vue-chartjs";
export default {
  extends: Pie,
  mixins: [mixins.reactiveProp],
  data() {
    return {
      options: {
        cutoutPercentage: 45
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>



