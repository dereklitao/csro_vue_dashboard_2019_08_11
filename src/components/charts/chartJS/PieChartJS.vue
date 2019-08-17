<script>
import { Pie, mixins } from "vue-chartjs";
export default {
  props: ["options"],
  extends: Pie,
  mixins: [mixins.reactiveProp],
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>



