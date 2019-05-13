<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Test</h1>
    <el-row>
      <el-button>DAF HABAIT</el-button>
      <el-button type="primary">Primary</el-button>
    </el-row>
    <CustomerGraph></CustomerGraph>
    <SchduleTable></SchduleTable>
    <KpiNewCust></KpiNewCust>
  </div>
</template>

<script>
import CustomerGraph from "@/components/CustomerGraph.vue";
import SchduleTable from "@/components/SchduleTable.vue";
import KpiNewCust from "@/components/KpiNewCust.vue";
export default {
  components: {
    CustomerGraph,
    SchduleTable,
    KpiNewCust
  }
};
</script>